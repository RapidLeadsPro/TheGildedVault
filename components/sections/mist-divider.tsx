import { AmbientVideo } from "@/components/ambient-video";

export function MistDivider() {
  return (
    <div className="relative h-[40vh] overflow-hidden bg-obsidian md:h-[50vh]">
      <AmbientVideo src="/videos/mist.mp4" opacity={0.85} blend="screen" />
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-transparent to-obsidian" />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian/50 via-transparent to-obsidian/50" />
    </div>
  );
}
