import { getSupabaseClient } from "@/lib/supabase/client";
import type { Product, ProductCategory } from "./types";
import { MOCK_PRODUCTS } from "./data/mockProducts";

/** Supabase products 테이블 row (snake_case) */
interface ProductRow {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  sale_price: number | null;
  discount_rate: number | null;
  cover_type: "single" | "set";
  image_url: string | null;
  sort_order: number;
}

function toProduct(row: ProductRow): Product {
  return {
    id: row.id,
    name: row.name,
    category: row.category,
    price: row.price,
    salePrice: row.sale_price,
    discountRate: row.discount_rate,
    coverType: row.cover_type,
    imageUrl: row.image_url,
    sortOrder: row.sort_order,
  };
}

/**
 * 상품 목록 조회 (CSR).
 * Supabase 환경변수가 설정돼 있으면 DB에서 조회하고,
 * 없으면(로컬 초기 세팅 등) 더미 데이터로 폴백한다.
 */
export async function fetchProducts(): Promise<Product[]> {
  const supabase = getSupabaseClient();

  if (!supabase) {
    return [...MOCK_PRODUCTS].sort((a, b) => a.sortOrder - b.sortOrder);
  }

  const { data, error } = await supabase
    .from("products")
    .select(
      "id, name, category, price, sale_price, discount_rate, cover_type, image_url, sort_order",
    )
    .order("sort_order", { ascending: true });

  if (error) {
    throw new Error(`상품 목록 조회 실패: ${error.message}`);
  }

  return (data as ProductRow[]).map(toProduct);
}
