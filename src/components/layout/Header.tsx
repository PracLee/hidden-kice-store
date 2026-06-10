import Link from "next/link";

const NAV_ITEMS = [
  { label: "스토어", href: "/", active: true },
  { label: "AI OMR WORK", href: "#", active: false },
  { label: "챌린지", href: "#", active: false },
  { label: "히든카이스 소개", href: "#", active: false },
];

function IconBadge({ count }: { count: number }) {
  return (
    <span className="absolute -top-1.5 -right-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-brand px-1 text-[10px] font-bold text-white">
      {count}
    </span>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-12">
          <Link href="/" className="text-xl font-black tracking-tight text-brand">
            HIDDEN KICE
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-[15px] font-medium transition-colors hover:text-brand ${
                  item.active ? "text-brand" : "text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-5 text-gray-700">
          <button aria-label="장바구니" className="relative cursor-pointer hover:text-brand">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <IconBadge count={1} />
          </button>
          <button aria-label="알림" className="relative cursor-pointer hover:text-brand">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            <IconBadge count={1} />
          </button>
          <button aria-label="마이페이지" className="cursor-pointer hover:text-brand">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
