import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Product, ProductResponse } from "../types";
import PageSpinner from "./PageSpinner";
import useFetchData from "../utils/useFetchData";
import Pagination from "./Pagination";
import { useLocation, useParams, useSearchParams } from "react-router";



function ProductListPage() {
    const [searchParams, setSearchParams] = useSearchParams();

    // Get a specific query parameter
    const page = searchParams.get('page') || 1;
    const { data, isLoading, fetchData } = useFetchData('https://dummyjson.com/products?limit=10&skip=' + (Number(page) * 10 - 10))
    console.log(page)
    /**
     * limit: 30
     * skip: 0
     * total: 194
     *  => 194 total
     * = skip 10 => 10 for each page
     * => 20 
     */

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        fetchData();
    }, [page])

    const products: Product[] = data.products || [];

    return <div className="mt-15">
        <div className="w-full flex justify-end">
            <Pagination current={page ? Number(page) : 1} totalPage={Math.ceil(data.total / 10)}></Pagination>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-3">
            {isLoading ? <PageSpinner /> : products.map((product, i) => {
                return <ProductCard key={`product_${i}_${Math.random()}`} product={product} onAddToCart={() => { }} />
            })}
        </div>

    </div>
}

export default ProductListPage