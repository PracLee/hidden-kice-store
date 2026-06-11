"use client";

import { useEffect, useMemo, useState } from "react";
import type { Product, ProductCategory } from "../types";
import { fetchProducts } from "../api";
import ProductCard from "./ProductCard";

type Filter = "전체" | ProductCategory;

const FILTERS: Filter[] = ["전체", "패스", "단품"];

export default function ProductSection() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [filter, setFilter] = useState<Filter>("전체");
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    let ignore = false;

    fetchProducts()
      .then((data) => {
        if (!ignore) setProducts(data);
      })
      .catch((error: Error) => {
        if (!ignore) setErrorMessage(error.message);
      })
      .finally(() => {
        if (!ignore) setIsLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, []);

  const visibleProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesFilter = filter === "전체" || product.category === filter;
      const matchesKeyword = product.name
        .toLowerCase()
        .includes(keyword.trim().toLowerCase());
      return matchesFilter && matchesKeyword;
    });
  }, [products, filter, keyword]);

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      {/* 검색 + 필터 */}
      <div className="mb-10 flex flex-col items-stretch justify-end gap-4 sm:flex-row sm:items-center">
        <div className="relative w-full sm:w-72">
          <svg
            className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
            width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="검색"
            className="w-full rounded-md border border-gray-200 py-2.5 pr-9 pl-9 text-sm outline-none focus:border-brand"
          />
          {keyword && (
            <button
              onClick={() => setKeyword("")}
              aria-label="검색어 지우기"
              className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          )}
        </div>

        <div className="flex items-center gap-3 text-sm">
          {FILTERS.map((item, index) => (
            <span key={item} className="flex items-center gap-3">
              {index > 0 && <span className="text-gray-200">|</span>}
              <button
                onClick={() => setFilter(item)}
                className={`cursor-pointer transition-colors ${
                  filter === item
                    ? "font-bold text-gray-900"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {item}
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* 상품 그리드 */}
      {isLoading ? (
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="aspect-10/9 rounded-md bg-gray-100" />
              <div className="mt-4 h-3 w-10 rounded bg-gray-100" />
              <div className="mt-2 h-4 w-40 rounded bg-gray-100" />
              <div className="mt-2 h-4 w-24 rounded bg-gray-100" />
            </div>
          ))}
        </div>
      ) : errorMessage ? (
        <p className="py-24 text-center text-sm text-gray-400">
          상품을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.
        </p>
      ) : visibleProducts.length === 0 ? (
        <p className="py-24 text-center text-sm text-gray-400">
          검색 결과가 없습니다.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
