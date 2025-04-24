import { Product } from "../types";
import { CategoryBadge } from "./CategoryBadge";

interface ProductCardProps {
    product: Product;
    onAddToCart?: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
    return (
        <div className="border p-4 rounded shadow">
            <img src={product.image} alt={product.name} />
            <div className="flex gap-2">
                <h3>{product.name}</h3>
                <CategoryBadge category={product.category} />

            </div>
            <p>{product.price.toLocaleString()}₫</p>
            {product.inStock ? (
                <button onClick={() => onAddToCart?.(product)}>Thêm vào giỏ</button>
            ) : (
                <span className="text-red-500">Hết hàng</span>
            )}
        </div>
    );
}

export default ProductCard
