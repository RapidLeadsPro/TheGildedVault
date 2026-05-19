# Bazi Report Automation — Implementation Plan

> **Status**: DRAFT v1 · awaiting "change in plan" from client before code begins
> **Last updated**: 2026-05-19
> **Owner**: Bill / Adros

---

## 1. Purpose

When a customer pays SGD 20 for a Bazi reading through the GHL funnel, we automatically:

1. Calculate their Four Pillars (Bazi chart) from birth data.
2. Have Claude write a personalised, premium-quality narrative report.
3. Match them to crystals from a curated knowledge base.
4. Publish the report at a branded URL on `thegildedvault.sg`.
5. Push the report link + key fields back into the GHL contact record so GHL's email + WhatsApp workflows can deliver it.

All cust comms (email, WhatsApp, drip sequences, upsells) stay inside GHL. The TGV site does the compute + renders the report only.

---

## 2. Architecture (locked v1)

```
┌─────────────────┐        ┌──────────────────────┐
│ TGV site CTA    │ deep   │ GHL Funnel/Form      │
│ "Begin Reading" │ link ▶ │ • DOB + birth time   │
└─────────────────┘        │ • city + country     │
                           │ • email + WA consent │
                           │ • Stripe SGD 20      │
                           └──────────┬───────────┘
                                      │ webhook on payment success
                                      ▼
                           ┌──────────────────────┐      ┌──────────────┐
                           │ POST /api/bazi-report│ ───▶ │ Claude       │
                           │ 1. Verify HMAC       │ ◀─── │ Sonnet 4.6   │
                           │ 2. Compute pillars   │      │ + Crystal KB │
                           │ 3. LLM narrative     │      └──────────────┘
                           │ 4. Save report       │
                           │ 5. PATCH GHL contact │
                           └──────────┬───────────┘
                                      │              ┌──────────────────┐
                                      └────────────▶ │ GHL contact      │
                                                     │ custom fields    │
                                                     └────────┬─────────┘
                                                              ▼
                                                     GHL email/WA workflow
                                                     delivers report link

                           ┌──────────────────────┐
                           │ /reports/[id]        │  ← customer opens link
                           │ branded HTML page    │
                           └──────────────────────┘
```

---

## 3. Locked decisions (from client Q&A)

| Decision | Choice | Rationale |
|---|---|---|
| LLM | Claude Sonnet 4.6 | Best price/quality. ~$0.05 per report. |
| Payment | Stripe **inside GHL form/funnel** | Consolidates comms inside GHL. TGV CTA just deep-links into the GHL funnel. |
| CRM | GoHighLevel (API ready) | Client has API key + Location ID. |
| Birth location | **City + Country required** | Necessary for accurate hour pillar timezone. |
| Crystal knowledge base | Mock 15 stones now → client list later | Mock structure lives in `lib/crystals.ts`. Swap in one file when client delivers real list. |
| Compute layer | Next.js API route on Vercel | No n8n. Same repo, $0 infra, ~3s end-to-end. |

---

## 4. Customer-facing flow

1. **TGV site** — user clicks "Unlock Your Chart · SGD 20" on the hero or featured offer.
2. **Redirect to GHL funnel** with name/email URL params if available.
3. **GHL form** collects:
   - Full name
   - Email
   - WhatsApp number (+ consent)
   - Birth date (universal calendar — DD/MM/YYYY)
   - Birth time (24-hour, with "unknown" fallback)
   - Birth city + country (dropdown / autocomplete)
4. **Stripe checkout inside GHL** — SGD 20 charge.
5. On payment success, **GHL workflow fires webhook** to:
   `POST https://thegildedvault.sg/api/bazi-report`
6. **API does the work** (see section 5).
7. **GHL workflow detects** the new value in `report_url` custom field → sends pre-built email + WhatsApp templates.
8. **Customer clicks the link** → lands on `/reports/[id]` — the branded report page.
9. Optional upsell CTA on the report page leads to bracelet checkout (later phase).

---

## 5. API layer (`/api/bazi-report`)

### Request (from GHL webhook)
```json
{
  "ghlContactId": "abc123",
  "name": "Chloe Tan",
  "email": "chloe@example.com",
  "whatsapp": "+6591234567",
  "birthDate": "1994-08-14",
  "birthTime": "14:35",
  "birthCity": "Singapore",
  "birthCountry": "SG",
  "locationId": "loc_xyz",
  "_hmac": "sha256=..."
}
```

### Steps
1. **Verify HMAC** (shared secret with GHL workflow).
2. **Resolve timezone** from city+country (IANA: Singapore → `Asia/Singapore`).
3. **Compute Four Pillars** — pure function, deterministic. Returns:
   ```ts
   {
     year:  { stem: "甲", branch: "戌", element: "Wood" },
     month: { stem: "壬", branch: "申", element: "Water" },
     day:   { stem: "丙", branch: "子", element: "Fire" },   // <- Day Master
     hour:  { stem: "乙", branch: "未", element: "Wood" },
     dayMaster: "Fire (丙)",
     elementCounts: { Wood: 2, Fire: 1, Earth: 1, Metal: 0, Water: 2 },
     missingElement: "Metal",
     wealthSector: "Northeast",
     careerPhase: "Expansion · 2026–2028"
   }
   ```
4. **Build LLM prompt** containing: chart, crystal KB JSON, brand voice, output schema.
5. **Call Claude Sonnet 4.6** with `response_format: json` schema. Get back:
   ```ts
   {
     summary: "...",               // 2-sentence executive summary
     narrative: { ... },           // full narrative sections
     topMatches: [                 // 3 ranked crystal recommendations
       { stoneId, fitScore, reason },
       ...
     ],
     forecast2026: "..."
   }
   ```
6. **Persist** report keyed by UUID. Store: chart JSON, LLM output, contact fields, timestamps.
7. **PATCH GHL contact** at `https://services.leadconnectorhq.com/contacts/{ghlContactId}` with custom fields (see section 7).
8. **Respond 200** to the GHL webhook.

### Response (to GHL workflow)
```json
{
  "ok": true,
  "reportId": "uuid",
  "reportUrl": "https://thegildedvault.sg/reports/uuid",
  "summary": "Your Fire Day Master is strong, but your chart is missing Metal..."
}
```

### Error handling
- LLM timeout → retry once with shorter max_tokens, then fall back to template-only report.
- GHL PATCH failure → save report anyway, queue retry.
- Invalid HMAC → return 401, no compute.

---

## 6. File structure to create

```
lib/
  bazi/
    constants.ts        # Heavenly stems, earthly branches, element maps
    pillars.ts          # Four Pillars calculation (deterministic)
    elements.ts         # Element counts, missing, wealth sector
    timezone.ts         # City+country → IANA timezone
    index.ts            # Public: computeBaziChart({date, time, city, country})
  crystals.ts           # Mock crystal KB (15 stones, schema documented)
  claude.ts             # Anthropic SDK wrapper, structured-output prompt
  storage.ts            # Report persistence (in-memory now, KV later)
  ghl.ts                # GHL REST helpers: verifyHmac, patchContact
  hmac.ts               # HMAC-SHA256 verify

app/
  api/
    bazi-report/
      route.ts          # POST handler (webhook target)
  reports/
    [id]/
      page.tsx          # Branded report page (luxury dark + gold)
      opengraph-image.tsx  # Dynamic OG card per report (for shareability)
      not-found.tsx
  dev/
    test-report/
      page.tsx          # Form to test the pipeline end-to-end without GHL (dev only)

docs/
  automation-plan.md    # THIS FILE
  GHL-SETUP.md          # Generated for client: custom fields, webhook URL, token instructions
  crystal-knowledge-base.md  # Schema spec for the client to fill out

.env.example            # Document required env vars
```

---

## 7. GHL custom fields to create

| Field name in GHL | Type | Purpose |
|---|---|---|
| `birth_date` | Date | Source data (collected on form) |
| `birth_time` | Text | Source data (HH:MM, 24h) |
| `birth_city` | Text | Source data |
| `birth_country` | Text | Source data (ISO-2) |
| `bazi_day_master` | Text | Output: e.g. "Fire (丙)" |
| `bazi_missing_element` | Text | Output: e.g. "Metal" |
| `bazi_wealth_sector` | Text | Output: e.g. "Northeast" |
| `report_summary` | Multi-line text | Output: 2-sentence summary |
| `report_url` | URL | Output: shareable link |
| `report_generated_at` | DateTime | Output: ISO 8601 |
| `top_crystal_1` / `top_crystal_2` / `top_crystal_3` | Text | Output: recommended stones |

---

## 8. Environment variables

```
# Anthropic
ANTHROPIC_API_KEY=sk-ant-...

# GoHighLevel
GHL_API_KEY=...
GHL_LOCATION_ID=loc_...
GHL_WEBHOOK_SECRET=...    # shared HMAC secret

# Storage (later)
KV_URL=...                 # Vercel KV (or Supabase later)

# Site
NEXT_PUBLIC_SITE_URL=https://thegildedvault.sg
```

---

## 9. Crystal knowledge base — schema (mock + client spec)

The mock will use this exact shape so the client list slots in unchanged:

```ts
type Crystal = {
  id: string;                  // slug, e.g. "citrine-wealth"
  name: string;                // "Citrine"
  hanzi?: string;              // "黃水晶"
  element: "Wood"|"Fire"|"Earth"|"Metal"|"Water";
  supportsElements: string[];  // which elements this stone bolsters
  domains: string[];           // ["Wealth","Career","Confidence"]
  priceTier: "entry"|"signature"|"premium";   // 100-180 / 180-300 / 300+
  bracelet: { sku: string; priceSGD: number };
  description: string;         // 1-2 sentences brand voice
  story?: string;              // optional deeper story for premium tier
  ethicalOrigin?: string;      // e.g. "Brazil, hand-cut"
};
```

A separate `docs/crystal-knowledge-base.md` will be generated as a fill-in template for the client to populate. Client returns the spreadsheet → we convert to JSON in one shot.

---

## 10. Open questions / change-in-plan placeholder

> **Client to update this section with the change in plan they mentioned.**

- [ ] *(pending client input)*
- [ ] *(pending client input)*

---

## 11. Phases

| Phase | Scope | Status |
|---|---|---|
| 1. Scaffolding | Bazi calc, mock crystal KB, Claude integration, report page, dev test form. No GHL/Stripe wired yet. | ⏸ blocked on plan sign-off |
| 2. GHL integration | HMAC verify, contact PATCH, webhook URL handoff to client | ⏳ pending creds |
| 3. Stripe (via GHL) | Trust GHL webhook only — no direct Stripe code | ⏳ |
| 4. Real crystal KB | Replace mock with client-supplied list | ⏳ pending client |
| 5. Persistent storage | Move from in-memory to Vercel KV or Supabase | ⏳ |
| 6. Polish + QA | Edge cases (unknown birth time, leap years, pre-Li-Chun), accessibility, mobile | ⏳ |

---

## 12. Cost model

| Item | Per report | Per 1,000 reports |
|---|---|---|
| Claude Sonnet 4.6 (input ~2k + output ~1.5k tokens) | ~$0.05 | $50 |
| Vercel function execution | ~$0 (free tier) | ~$0 |
| Vercel KV storage | ~$0 (free tier ~30k commands) | ~$0 |
| GHL API calls | $0 | $0 |
| **Marginal cost** | **~SGD 0.07** | **SGD 70** |

Gross profit on the SGD 20 front-end: ~SGD 19.93 / 99.7% margin. The point of this offer is to liquidate ad spend, not to make money on the report itself.

---

## 13. What I'll NOT build until told otherwise

- A custom payment page on TGV site (Stripe lives inside GHL, per decision).
- User accounts / login (reports are unauthenticated UUIDs — unguessable URLs).
- An admin dashboard (use GHL contact view).
- Re-generation of reports (one purchase = one report; re-runs are a separate flow).
- Multi-language (English only for v1; Mandarin in phase 2).

---

> **Next step**: Client reviews this plan and writes the "change in plan" into section 10. Once cleared, I begin Phase 1.
