import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#06070D",
        midnight: "#0D1020",
        navy: {
          900: "#0D1020",
          800: "#131732",
          700: "#1F2547",
          600: "#2A3160",
        },
        gold: {
          50: "#FBF6E6",
          100: "#F2E6BD",
          200: "#E6CC8C",
          300: "#D9B871",
          400: "#C9A961",
          500: "#B89346",
          600: "#8B6F2E",
          700: "#5F4B1F",
        },
        cream: "#F5EFDF",
        bone: "#E8E4D8",
        smoke: "#95918A",
        jade: "#4A7C6E",
      },
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "ui-serif", "serif"],
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        hanzi: ["var(--font-hanzi)", "Noto Serif SC", "ui-serif", "serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #E6CC8C 0%, #C9A961 45%, #8B6F2E 100%)",
        "gold-shine": "linear-gradient(90deg, #8B6F2E 0%, #E6CC8C 50%, #8B6F2E 100%)",
        "ink-fade": "radial-gradient(ellipse at top, rgba(201,169,97,0.10), transparent 60%)",
        "vault-glow": "radial-gradient(circle at 50% 0%, rgba(201,169,97,0.18), rgba(6,7,13,0) 55%)",
      },
      letterSpacing: {
        widest: "0.2em",
        "ultra-wide": "0.35em",
      },
      animation: {
        "fade-up": "fadeUp 0.9s ease-out both",
        "shimmer": "shimmer 6s linear infinite",
        "float": "float 8s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
