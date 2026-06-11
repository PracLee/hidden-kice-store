-- 히든카이스 스토어: products 테이블 생성 + 더미 데이터
-- Supabase Dashboard > SQL Editor 에 붙여넣고 Run 하면 됩니다.

create table if not exists public.products (
  id text primary key,
  name text not null,
  category text not null check (category in ('패스', '단품')),
  price integer not null,
  sale_price integer,
  discount_rate integer,
  cover_type text not null check (cover_type in ('single', 'set')),
  image_url text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

-- 공개 스토어이므로 익명 사용자에게 읽기만 허용 (쓰기는 차단)
alter table public.products enable row level security;

drop policy if exists "products_public_read" on public.products;
create policy "products_public_read"
  on public.products for select
  to anon, authenticated
  using (true);

insert into public.products (id, name, category, price, sale_price, discount_rate, cover_type, image_url, sort_order) values
  ('p01', '2026 Hidden Kice 시즌7', '단품', 40000, null,  null, 'single', '/images/products/single.png', 1),
  ('p02', '2026 Hidden Kice 시즌7', '패스', 76000, 64800, 5,    'set',    '/images/products/set.png',    2),
  ('p03', '2026 Hidden Kice 시즌7', '패스', 76000, 64800, 5,    'set',    '/images/products/set.png',    3),
  ('p04', '2026 Hidden Kice 시즌7', '패스', 76000, 64800, 5,    'single', '/images/products/single.png', 4),
  ('p05', '2026 Hidden Kice 시즌7', '패스', 76000, 64800, 5,    'single', '/images/products/single.png', 5),
  ('p06', '2026 Hidden Kice 시즌7', '패스', 76000, 64800, 5,    'set',    '/images/products/set.png',    6),
  ('p07', '2026 Hidden Kice 시즌7', '단품', 40000, null,  null, 'single', '/images/products/single.png', 7),
  ('p08', '2026 Hidden Kice 시즌7', '패스', 76000, 64800, 5,    'set',    '/images/products/set.png',    8),
  ('p09', '2026 Hidden Kice 시즌7', '단품', 40000, null,  null, 'single', '/images/products/single.png', 9),
  ('p10', '2026 Hidden Kice 시즌7', '패스', 76000, 64800, 5,    'set',    '/images/products/set.png',    10),
  ('p11', '2026 Hidden Kice 시즌7', '패스', 76000, 64800, 5,    'set',    '/images/products/set.png',    11),
  ('p12', '2026 Hidden Kice 시즌7', '패스', 76000, 64800, 5,    'single', '/images/products/single.png', 12)
on conflict (id) do update set
  name = excluded.name,
  category = excluded.category,
  price = excluded.price,
  sale_price = excluded.sale_price,
  discount_rate = excluded.discount_rate,
  cover_type = excluded.cover_type,
  image_url = excluded.image_url,
  sort_order = excluded.sort_order;
