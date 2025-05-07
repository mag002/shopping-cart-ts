import { useEffect } from "react";
import { Link } from "react-router";
import { Product } from "../types";
import Button from "./Button";
import { CategoryBadge } from "./CategoryBadge";

interface ProductCardProps {
    product: Product;
    onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
    useEffect(() => {
        // call api to get Product List depends on dummyJson 
        // create Interface with https://transform.tools/json-to-typescript
        // map data 
        // 18:20 | 21:20
        console.log('USE EFFECT CALL')
    }, [])

    return (
        <div className="border p-4 rounded shadow">
            <img src={product.thumbnail} alt={product.title} />
            <div className="flex gap-2">
                <Link to={`/product/${product.id}`}>
                    <h3>{product.title}</h3>
                </Link>
                <CategoryBadge category={product.category} />

            </div>
            <p>{product.price.toLocaleString()}₫</p>
            {product.stock > 0 ? (
                <Button onClick={() => onAddToCart(product)} >Them vao gio hang</Button>
            ) : (
                <span className="text-red-500">Hết hàng</span>
            )}
        </div>
    );
}

export default ProductCard
