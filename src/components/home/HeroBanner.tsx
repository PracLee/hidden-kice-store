const FEATURES = [
  {
    title: "실전 적중",
    description: "출제 경향을 꿰뚫는 문제",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "난이도별 구성",
    description: "단계별로 완성하는 실력",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M5 20v-6" />
        <path d="M12 20V9" />
        <path d="M19 20V4" />
      </svg>
    ),
  },
  {
    title: "검증된 결과",
    description: "합격생이 증명한 선택",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 21h8M12 17v4M7 4h10v6a5 5 0 0 1-10 0V4Z" />
        <path d="M7 6H4a2 2 0 0 0 2 5h1M17 6h3a2 2 0 0 1-2 5h-1" />
      </svg>
    ),
  },
];

const HERO_BOOKS = [
  { accent: "#ff5a1f", className: "z-30 h-64 w-44 sm:h-80 sm:w-56" },
  { accent: "#8ab6d6", className: "z-20 h-60 w-40 -ml-24 mt-4 opacity-70 sm:h-72 sm:w-48 sm:-ml-28" },
  { accent: "#a78bfa", className: "z-10 h-56 w-36 -ml-20 mt-8 opacity-50 sm:h-64 sm:w-44 sm:-ml-24" },
];

function HeroBook({ accent, className }: { accent: string; className: string }) {
  return (
    <div
      className={`relative flex flex-col justify-between overflow-hidden rounded-sm p-4 shadow-2xl ${className}`}
      style={{
        background:
          "radial-gradient(ellipse 90% 40% at 50% 75%, #333 0%, #0d0d0d 60%, #000 100%)",
        boxShadow: "8px 8px 30px rgba(0,0,0,.6)",
      }}
    >
      <div
        className="mt-3 text-center text-[2.4rem] leading-[0.85] font-black tracking-tighter sm:text-[3.2rem]"
        style={{
          color: accent,
          transform: "scaleY(1.6)",
          transformOrigin: "top",
          maskImage: "linear-gradient(to bottom, black 30%, transparent 95%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 30%, transparent 95%)",
        }}
      >
        HIDDEN
      </div>
      <div className="space-y-2 pb-1 text-center">
        <div
          className="flex items-center justify-center gap-2 text-[10px] font-bold tracking-widest"
          style={{ color: accent }}
        >
          <span>HIDDEN</span>
          <span className="h-3 w-px" style={{ backgroundColor: accent }} />
          <span>KICE</span>
        </div>
        <p className="text-[10px] font-bold tracking-wider text-white/80">
          2026 <span style={{ color: accent }}>⑦</span> SEASON
        </p>
      </div>
      <div
        className="pointer-events-none absolute right-2 bottom-14 left-2 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #fffc, transparent)" }}
      />
    </div>
  );
}

export default function HeroBanner() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background:
          "radial-gradient(ellipse 70% 90% at 75% 30%, #3d3d3d 0%, #1a1a1a 55%, #0a0a0a 100%)",
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-16 lg:flex-row lg:justify-between lg:py-20">
        {/* 좌측 텍스트 */}
        <div className="w-full max-w-xl">
          <p className="mb-4 text-sm font-bold tracking-[0.2em] text-accent">
            HIDDEN KICE —
          </p>
          <h1 className="text-5xl font-black tracking-tight sm:text-6xl">히든카이스</h1>
          <p className="mt-3 text-2xl font-light text-gray-200 sm:text-3xl">
            모두가 푸는 건 이유가 있습니다
          </p>
          <p className="mt-4 text-[15px] text-gray-400">
            상위권이 선택한 문제집, 결과로 증명된 실전 대비서
          </p>

          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-0">
            {FEATURES.map((feature, index) => (
              <div key={feature.title} className="flex items-center">
                {index > 0 && (
                  <span className="mr-6 hidden h-8 w-px bg-white/15 sm:block" />
                )}
                <div className="flex items-center gap-3 sm:pr-6">
                  <span className="text-accent">{feature.icon}</span>
                  <div>
                    <p className="text-[13px] font-bold text-accent">{feature.title}</p>
                    <p className="mt-0.5 text-xs text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="mt-10 inline-flex cursor-pointer items-center gap-8 rounded-md border border-accent/70 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent/10">
            히든카이스 시리즈 보기
            <span aria-hidden className="text-accent">→</span>
          </button>
        </div>

        {/* 우측 교재 목업 */}
        <div className="relative flex items-end pr-4">
          <div
            className="absolute -bottom-8 left-1/2 h-10 w-[120%] -translate-x-1/2 rounded-[50%]"
            style={{ background: "radial-gradient(ellipse, #0006, transparent 70%)" }}
          />
          {HERO_BOOKS.map((book) => (
            <HeroBook key={book.accent} {...book} />
          ))}
        </div>
      </div>

      {/* 페이지 인디케이터 */}
      <div className="absolute right-8 bottom-6 rounded-full bg-black/50 px-3.5 py-1 text-xs text-white/80">
        1/5
      </div>
    </section>
  );
}
