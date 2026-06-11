import Image from "next/image";

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

export default function HeroBanner() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background:
          "radial-gradient(ellipse 65% 85% at 70% 35%, #2e2e2e 0%, #161616 55%, #0a0a0a 100%)",
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 pt-16 lg:flex-row lg:items-stretch lg:justify-between lg:pt-20">
        {/* 좌측 텍스트 — 문구 변경 가능성이 있어 이미지가 아닌 텍스트로 유지 */}
        <div className="w-full max-w-xl pb-16 lg:pb-20">
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

        {/* 우측 교재 연출컷 — 좌측 가장자리를 페이드 처리해 배경과 자연스럽게 연결 */}
        <div className="flex w-full max-w-lg items-end lg:max-w-[560px]">
          <Image
            src="/images/hero/hero-books.png"
            alt="히든카이스 2026 시즌7 교재"
            width={1049}
            height={731}
            priority
            className="h-auto w-full"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, black 16%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 16%)",
            }}
          />
        </div>
      </div>

      {/* 페이지 인디케이터 */}
      <div className="absolute right-8 bottom-6 rounded-full bg-black/50 px-3.5 py-1 text-xs text-white/80">
        1/5
      </div>
    </section>
  );
}
