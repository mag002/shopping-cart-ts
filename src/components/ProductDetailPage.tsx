import { useEffect, useState } from "react";
import { useParams } from "react-router"
import PageSpinner from "./PageSpinner";

function ProductDetailPage() {
    const [product, setProduct] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const param = useParams();
    console.log(param)

    useEffect(() => {
        fetchProductDetail();
    }, [])
    const fetchProductDetail = async () => {
        setIsLoading(true)
        const res = await fetch('https://dummyjson.com/products/' + param.id);
        const data = await res.json();
        setProduct(data);
        setIsLoading(false)
    }
    // call product detail


    return isLoading ? <PageSpinner /> : <div className="mt-10">
        {/* customHook / global state management */}
        {JSON.stringify(product)}

    </div>
}

export default ProductDetailPage