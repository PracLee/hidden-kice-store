/**
 * 실제 교재 이미지 에셋이 없어 CSS/SVG로 표지를 그려주는 컴포넌트.
 * single: 검정 표지 단권 / set: 5권 컬러 세트
 */

const SET_COLORS = [
  { band: "#2b3a8f", body: "#dceefb" },
  { band: "#1e7a4f", body: "#e3f6e8" },
  { band: "#d04a6e", body: "#fdeef0" },
  { band: "#c2532b", body: "#fdf0e0" },
  { band: "#7a4fa3", body: "#f3ecfa" },
];

export function SingleBookCover({ accent = "#9be24f" }: { accent?: string }) {
  return (
    <div
      className="relative flex aspect-7/9 w-full max-w-44 flex-col justify-between overflow-hidden rounded-sm p-3 shadow-lg"
      style={{
        background:
          "radial-gradient(ellipse 90% 45% at 50% 78%, #3a3a3a 0%, #111 55%, #000 100%)",
      }}
    >
      <div
        className="mt-2 text-center text-[2.6rem] leading-[0.85] font-black tracking-tighter"
        style={{
          color: accent,
          transform: "scaleY(1.5)",
          transformOrigin: "top",
          maskImage: "linear-gradient(to bottom, black 35%, transparent 95%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 35%, transparent 95%)",
        }}
      >
        HIDDEN
      </div>
      <div
        className="flex items-center justify-center gap-2 pb-1 text-[9px] font-bold tracking-widest"
        style={{ color: accent }}
      >
        <span>HIDDEN</span>
        <span className="h-3 w-px" style={{ backgroundColor: accent }} />
        <span>KICE</span>
      </div>
      {/* 표지 하단 빛 효과 */}
      <div
        className="pointer-events-none absolute right-0 bottom-9 left-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #fff9, transparent)" }}
      />
    </div>
  );
}

function MiniBook({ band, body }: { band: string; body: string }) {
  return (
    <div
      className="flex aspect-3/4 w-14 flex-col overflow-hidden rounded-xs shadow-md sm:w-16"
      style={{ backgroundColor: body }}
    >
      <div
        className="px-1 py-1 text-[7px] leading-tight font-black text-white"
        style={{ backgroundColor: band }}
      >
        HIDDEN
        <br />
        KICE
      </div>
      <div className="flex flex-1 items-center justify-center">
        <svg width="26" height="26" viewBox="0 0 24 24">
          <polygon
            points="12,1 15,9 23,9 17,14 19,22 12,17 5,22 7,14 1,9 9,9"
            fill={band}
            opacity="0.55"
          />
        </svg>
      </div>
    </div>
  );
}

export function SetBookCover() {
  return (
    <div className="flex flex-col items-center">
      <div className="z-10 flex gap-1.5">
        {SET_COLORS.slice(0, 3).map((c) => (
          <MiniBook key={c.band} {...c} />
        ))}
      </div>
      <div className="-mt-5 flex gap-1.5">
        {SET_COLORS.slice(3).map((c) => (
          <MiniBook key={c.band} {...c} />
        ))}
      </div>
    </div>
  );
}

export default function BookCover({ type }: { type: "single" | "set" }) {
  return type === "single" ? <SingleBookCover /> : <SetBookCover />;
}
