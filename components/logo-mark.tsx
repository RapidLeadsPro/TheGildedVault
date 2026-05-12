import Image from "next/image";

export function LogoMark({ size = 40, withText = true }: { size?: number; withText?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="relative shrink-0 overflow-hidden rounded-full ring-1 ring-gold-400/30"
        style={{ width: size, height: size }}
      >
        <Image
          src="/logo.png"
          alt="The Gilded Vault"
          width={size * 2}
          height={size * 2}
          priority
          className="h-full w-full object-cover"
        />
      </div>
      {withText && (
        <div className="flex flex-col leading-none">
          <span className="font-display text-base tracking-wide text-cream md:text-lg">
            The Gilded Vault
          </span>
          <span className="font-hanzi text-[10px] tracking-[0.4em] text-gold-400/80 md:text-xs">
            梁&nbsp;金&nbsp;藏&nbsp;石
          </span>
        </div>
      )}
    </div>
  );
}
