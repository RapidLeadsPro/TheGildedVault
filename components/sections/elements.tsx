"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AmbientVideo } from "@/components/ambient-video";

const elements = [
  {
    name: "Wood",
    hanzi: "木",
    video: "/videos/wood.mp4",
    color: "from-emerald-400/80 to-jade/30",
    stones: "Green Aventurine · Malachite · Jade",
    domain: "Growth · Ambition · New ventures",
  },
  {
    name: "Fire",
    hanzi: "火",
    video: "/videos/fire.mp4",
    color: "from-rose-400/80 to-orange-500/30",
    stones: "Carnelian · Garnet · Red Jasper",
    domain: "Recognition · Passion · Leadership",
  },
  {
    name: "Earth",
    hanzi: "土",
    video: "/videos/earth.mp4",
    color: "from-amber-600/80 to-yellow-700/30",
    stones: "Tiger's Eye · Yellow Jade · Pyrite",
    domain: "Stability · Trust · Property",
  },
  {
    name: "Metal",
    hanzi: "金",
    video: "/videos/metal.mp4",
    color: "from-gold-200/80 to-gold-500/30",
    stones: "Citrine · Clear Quartz · Rutilated Quartz",
    domain: "Wealth · Discipline · Precision",
  },
  {
    name: "Water",
    hanzi: "水",
    video: "/videos/water.mp4",
    color: "from-sky-400/80 to-blue-700/30",
    stones: "Aquamarine · Sodalite · Lapis Lazuli",
    domain: "Wisdom · Career flow · Communication",
  },
];

export function FiveElements() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Horizontal scroll: translate cards as user scrolls vertically through the pinned section
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section
      ref={ref}
      className="relative bg-obsidian"
      id="elements"
      style={{ height: "300vh" }}
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="container-tight">
          <div className="mb-12 flex items-end justify-between gap-8 md:mb-20">
            <div>
              <p className="eyebrow">五行 · Wǔ Xíng</p>
              <h2 className="heading-display mt-4 text-4xl text-cream md:text-6xl lg:text-7xl">
                The five elements <br />
                <span className="italic text-gold-gradient">that govern your chart.</span>
              </h2>
            </div>
            <p className="hidden max-w-sm text-base leading-relaxed text-bone/70 md:block">
              Your Bazi is composed of these five forces in unique proportion. Most charts are
              missing one. That deficiency is what we correct.
            </p>
          </div>
        </div>

        <motion.div style={{ x }} className="flex shrink-0 gap-6 pl-[5vw] md:gap-10 md:pl-[10vw]">
          {elements.map((el) => (
            <article
              key={el.name}
              className="relative w-[80vw] max-w-md shrink-0 overflow-hidden rounded-sm border border-gold-400/20 bg-gradient-to-b from-navy-800/60 to-navy-900/80 p-10 md:w-[40vw]"
            >
              {/* Element ambient video */}
              <AmbientVideo
                src={el.video}
                className="!inset-0"
                opacity={0.45}
                blend="screen"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 via-navy-900/60 to-obsidian/90" />
              <div
                className={`pointer-events-none absolute -right-12 -top-12 h-72 w-72 rounded-full bg-gradient-to-br ${el.color} opacity-40 blur-3xl`}
              />
              <div className="relative">
                <p className="font-hanzi text-9xl text-gold-200/90 md:text-[12rem]">{el.hanzi}</p>
                <h3 className="mt-6 font-display text-5xl text-cream md:text-6xl">{el.name}</h3>
                <div className="my-6 h-px w-16 bg-gold-400/40" />
                <p className="text-[10px] uppercase tracking-widest text-smoke">Stones</p>
                <p className="mt-1 text-base leading-snug text-bone/85">{el.stones}</p>
                <p className="mt-6 text-[10px] uppercase tracking-widest text-smoke">Governs</p>
                <p className="mt-1 text-base leading-snug text-bone/85">{el.domain}</p>
              </div>
            </article>
          ))}
          <div className="w-[20vw] shrink-0" />
        </motion.div>

        <div className="container-tight mt-12 hidden text-[10px] uppercase tracking-[0.3em] text-smoke md:block">
          Scroll to traverse the elements →
        </div>
      </div>
    </section>
  );
}
