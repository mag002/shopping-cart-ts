import { useEffect, useState } from "react";
import { useParams } from "react-router"
import PageSpinner from "./PageSpinner";
import useFetchData from "../utils/useFetchData";

function ProductDetailPage() {
    const param = useParams();

    const { data: product, isLoading, fetchData } = useFetchData('https://dummyjson.com/products/' + param.id);
    // // call product detail
    useEffect(() => {
        fetchData();
    }, []);



    return isLoading ? <PageSpinner /> : <div className="mt-10">
        {/* customHook / global state management */}
        {JSON.stringify(product)}

    </div>
}

export default ProductDetailPage