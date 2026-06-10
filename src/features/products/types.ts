export type ProductCategory = "패스" | "단품";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  /** 정가 (원) */
  price: number;
  /** 할인가 (원). 할인이 없으면 null */
  salePrice: number | null;
  /** 할인율 (%). 할인이 없으면 null */
  discountRate: number | null;
  /** 카드에 보여줄 커버 형태 — 단권 표지 or 5권 세트 */
  coverType: "single" | "set";
  sortOrder: number;
}
