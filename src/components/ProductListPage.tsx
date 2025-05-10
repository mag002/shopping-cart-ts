import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Product, ProductResponse } from "../types";
import PageSpinner from "./PageSpinner";
import useFetchData from "../utils/useFetchData";



function ProductListPage() {
    const { data, isLoading, fetchData } = useFetchData('https://dummyjson.com/products')

    useEffect(() => {
        fetchData();
    }, [])

    const products: Product[] = data.products || [];

    return <div className="grid grid-cols-3 gap-4 mt-3">
        {isLoading ? <PageSpinner /> : products.map(product => {
            return <ProductCard product={product} onAddToCart={() => { }} />
        })}
    </div>
}

export default ProductListPage