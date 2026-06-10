import type { Product } from "../types";
import { formatPrice } from "@/lib/utils/format";
import BookCover from "./BookCover";

export default function ProductCard({ product }: { product: Product }) {
  const hasDiscount = product.salePrice !== null && product.discountRate !== null;

  return (
    <article className="group cursor-pointer">
      <div className="flex aspect-10/9 items-center justify-center rounded-md border border-gray-200 bg-white p-6 transition-shadow group-hover:shadow-md">
        <BookCover type={product.coverType} />
      </div>

      <div className="mt-4 space-y-1">
        <p className="text-[13px] text-gray-500">{product.category}</p>
        <h3 className="text-[15px] font-bold text-gray-900">{product.name}</h3>

        {hasDiscount ? (
          <div>
            <p className="text-[13px] text-gray-400 line-through">
              {formatPrice(product.price)}
            </p>
            <p className="text-[15px] font-bold text-gray-900">
              <span className="mr-1.5 text-accent">{product.discountRate}%</span>
              {formatPrice(product.salePrice!)}
            </p>
          </div>
        ) : (
          <p className="text-[15px] font-bold text-gray-900">
            {formatPrice(product.price)}
          </p>
        )}
      </div>
    </article>
  );
}
