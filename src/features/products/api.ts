import type { Product } from "./types";
import { MOCK_PRODUCTS } from "./data/mockProducts";

/**
 * 상품 목록 조회.
 * 지금은 더미 데이터를 반환하며, Supabase 연동 시 이 함수 내부만
 * `supabase.from("products").select()` 호출로 교체한다.
 * (호출부 컴포넌트는 수정 없이 그대로 사용)
 */
export async function fetchProducts(): Promise<Product[]> {
  // 네트워크 응답을 흉내내기 위한 지연 — CSR 로딩 상태 확인용
  await new Promise((resolve) => setTimeout(resolve, 300));
  return [...MOCK_PRODUCTS].sort((a, b) => a.sortOrder - b.sortOrder);
}
