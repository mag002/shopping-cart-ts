import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Product, ProductResponse } from "../types";
import PageSpinner from "./PageSpinner";



function ProductListPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    useEffect(() => {
        fetchProductData()
    }, [])
    const fetchProductData = async () => {
        setIsLoading(true)
        const res = await fetch('https://dummyjson.com/products');
        const data: ProductResponse = await res.json();
        setProducts(data.products);
        setIsLoading(false)

    }
    return <div className="grid grid-cols-3 gap-4 mt-3">
        {isLoading ? <PageSpinner /> : products.map(product => {
            return <ProductCard product={product} onAddToCart={() => { }} />
        })}
    </div>
}

export default ProductListPage