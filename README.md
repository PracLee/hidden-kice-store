# 히든카이스 스토어 (HIDDEN KICE Store)

교재 판매 스토어 메인 페이지 클론 과제입니다.

- **배포 URL**: https://hidden-kice-store.vercel.app
- **GitHub**: https://github.com/PracLee/hidden-kice-store

## 기술 스택

| 영역 | 선택 | 이유 |
|---|---|---|
| 프레임워크 | Next.js 16 (App Router) | 라우팅·이미지 최적화·배포 생태계 표준 |
| 언어 | TypeScript | 도메인 모델(Product)을 타입으로 강제 |
| 스타일 | Tailwind CSS v4 | 시안 재현 속도, 디자인 토큰(@theme) 관리 |
| 데이터 | Supabase (PostgreSQL) | 상품 데이터 저장, RLS로 익명 읽기 전용 공개 |
| 배포 | Vercel | GitHub 연동 자동 배포 (push → 재배포) |

## 실행 방법

```bash
npm install
cp .env.example .env.local   # Supabase URL/KEY 입력
npm run dev
```

환경변수가 없어도 실행됩니다 — 이 경우 로컬 더미 데이터로 폴백합니다(아래 설계 참고).

데이터베이스 스키마·시드는 [`supabase/seed.sql`](supabase/seed.sql)을 Supabase SQL Editor에서 실행하면 됩니다.

## 폴더 구조

```
src/
├── app/                        # 라우팅 전용 — 페이지는 컴포넌트 조립만 담당
│   ├── layout.tsx              #   전역 레이아웃 (Header / Footer)
│   └── page.tsx                #   홈 = HeroBanner + ProductSection
│
├── components/                 # 도메인과 무관한 공용 UI
│   ├── layout/                 #   Header, Footer
│   └── home/                   #   HeroBanner (홈 전용 프레젠테이션)
│
├── features/                   # ★ 도메인(기능) 단위 응집
│   └── products/
│       ├── types.ts            #   Product 도메인 모델
│       ├── api.ts              #   데이터 접근 레이어 (Supabase 조회)
│       ├── data/               #   더미 데이터 (폴백 + DB 시드 원본)
│       └── components/         #   ProductSection(CSR), ProductCard, BookCover
│
└── lib/                        # 외부 서비스·공용 유틸
    ├── supabase/client.ts      #   Supabase 브라우저 클라이언트 (싱글톤)
    └── utils/format.ts         #   가격 포맷 등
```

### 설계 의도 (면접 설명 포인트)

**1. 기능(feature) 단위 응집 — `features/products/`**

상품과 관련된 타입·데이터 접근·UI를 한 폴더에 모았습니다. "장바구니", "챌린지" 같은
새 도메인이 생기면 `features/cart/`, `features/challenge/`를 같은 패턴으로 추가하면
되고, 기존 코드를 건드리지 않습니다. 페이지(`app/`)는 라우팅과 조립만 담당하므로
페이지가 늘어나도 도메인 로직이 흩어지지 않습니다.

**2. 데이터 소스와 UI의 결합 차단 — `api.ts` 레이어**

컴포넌트는 `fetchProducts()`라는 함수만 알고, 그 너머가 Supabase인지 더미인지
모릅니다. 실제로 개발 과정에서 더미 데이터 → Supabase로 교체할 때 **컴포넌트는 한 줄도
수정하지 않았습니다.** 백엔드가 자체 API 서버로 바뀌어도 이 파일만 교체하면 됩니다.

**3. 환경변수 미설정 시 더미 폴백**

`getSupabaseClient()`가 환경변수 부재 시 null을 반환하고, `fetchProducts()`는 더미
데이터로 폴백합니다. 새 팀원이 키 없이 클론해도 바로 화면을 볼 수 있고, 외부 서비스
장애가 로컬 개발을 막지 않습니다.

**4. CSR 선택 이유**

과제 요구사항(CSR)에 따라 상품 목록은 클라이언트에서 fetch합니다. 검색·필터가
클라이언트 상태와 즉시 상호작용하는 화면이라 CSR과 잘 맞고, 로딩 동안 스켈레톤 UI를
보여줍니다. 정적인 히어로·헤더·푸터는 서버 컴포넌트로 두어 JS 번들을 줄였습니다.
(SEO가 중요한 실서비스라면 서버 프리페치 + 클라이언트 hydration 혼합으로 확장 가능)

**5. 보안 — Supabase RLS**

`products` 테이블은 Row Level Security로 익명 사용자에게 **읽기만** 허용합니다.
브라우저에 노출되는 publishable key로는 쓰기가 불가능합니다.

**6. 이미지 전략**

상품 이미지는 `imageUrl`이 있으면 `next/image`(최적화·lazy loading)로, 없으면
CSS/SVG로 그린 표지(`BookCover`)로 폴백합니다. 에셋이 준비되지 않은 상품도 화면이
깨지지 않습니다.

## 데이터 흐름

```
[브라우저] ProductSection (useEffect)
    → features/products/api.ts fetchProducts()
    → lib/supabase/client.ts (env 있음) ──→ Supabase REST (RLS: read-only)
                              (env 없음) ──→ data/mockProducts.ts 폴백
    → 검색어·카테고리 필터 (클라이언트 상태)
    → ProductCard 렌더링
```
