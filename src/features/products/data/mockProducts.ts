import type { Product } from "../types";

/**
 * 화면 더미 데이터.
 * 추후 Supabase `products` 테이블 시드 데이터로 그대로 옮겨 사용한다.
 */
export const MOCK_PRODUCTS: Product[] = [
  { id: "p01", name: "2026 Hidden Kice 시즌7", category: "단품", price: 40000, salePrice: null, discountRate: null, coverType: "single", imageUrl: null, sortOrder: 1 },
  { id: "p02", name: "2026 Hidden Kice 시즌7", category: "패스", price: 76000, salePrice: 64800, discountRate: 5, coverType: "set", imageUrl: null, sortOrder: 2 },
  { id: "p03", name: "2026 Hidden Kice 시즌7", category: "패스", price: 76000, salePrice: 64800, discountRate: 5, coverType: "set", imageUrl: null, sortOrder: 3 },
  { id: "p04", name: "2026 Hidden Kice 시즌7", category: "패스", price: 76000, salePrice: 64800, discountRate: 5, coverType: "single", imageUrl: null, sortOrder: 4 },
  { id: "p05", name: "2026 Hidden Kice 시즌7", category: "패스", price: 76000, salePrice: 64800, discountRate: 5, coverType: "single", imageUrl: null, sortOrder: 5 },
  { id: "p06", name: "2026 Hidden Kice 시즌7", category: "패스", price: 76000, salePrice: 64800, discountRate: 5, coverType: "set", imageUrl: null, sortOrder: 6 },
  { id: "p07", name: "2026 Hidden Kice 시즌7", category: "단품", price: 40000, salePrice: null, discountRate: null, coverType: "single", imageUrl: null, sortOrder: 7 },
  { id: "p08", name: "2026 Hidden Kice 시즌7", category: "패스", price: 76000, salePrice: 64800, discountRate: 5, coverType: "set", imageUrl: null, sortOrder: 8 },
  { id: "p09", name: "2026 Hidden Kice 시즌7", category: "단품", price: 40000, salePrice: null, discountRate: null, coverType: "single", imageUrl: null, sortOrder: 9 },
  { id: "p10", name: "2026 Hidden Kice 시즌7", category: "패스", price: 76000, salePrice: 64800, discountRate: 5, coverType: "set", imageUrl: null, sortOrder: 10 },
  { id: "p11", name: "2026 Hidden Kice 시즌7", category: "패스", price: 76000, salePrice: 64800, discountRate: 5, coverType: "set", imageUrl: null, sortOrder: 11 },
  { id: "p12", name: "2026 Hidden Kice 시즌7", category: "패스", price: 76000, salePrice: 64800, discountRate: 5, coverType: "single", imageUrl: null, sortOrder: 12 },
];
