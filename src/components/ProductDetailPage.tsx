import { useEffect, useState } from "react";
import { useParams } from "react-router"
import PageSpinner from "./PageSpinner";
import useFetchData from "../utils/useFetchData";
import ReviewForm from "./ReviewForm";
import { StarIcon, ShoppingCartIcon } from 'lucide-react'
import Button from "./Button";
const fakeReviews = [
    { id: 1, name: "Minh", rating: 4, comment: "Sản phẩm chất lượng", date: Date.now() },
    { id: 2, name: "An", rating: 5, comment: "Rất hài lòng!", date: Date.now() },
];

function ProductDetailPage() {
    const [showReviewForm, setShowReviewForm] = useState(false)
    const { id } = useParams();

    const { data: product, isLoading, fetchData } = useFetchData('https://dummyjson.com/products/' + id);
    // // call product detail
    // show toast for success/error when submit
    // hide it after 3 seconds
    // note: use useEffect to implement that
    // 18:33 |21:33

    useEffect(() => {
        fetchData();
    }, []);


    if (!product) return <p>Không tìm thấy sản phẩm</p>;

    if (isLoading) {
        return <PageSpinner />
    }

    const fullStars = Math.floor(product.rating)
    const hasHalfStar = product.rating % 1 !== 0
    const renderStars = (rating: number) => (
        <div className="flex">
            {[...Array(5)].map((_, i) => (
                <StarIcon
                    key={i}
                    size={16}
                    className={`${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-200'}`}
                />
            ))}
        </div>
    )

    return (
        <main className="max-w-screen-xl mx-auto px-4 py-12 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* Product Image */}
                <div className="aspect-square w-full overflow-hidden bg-gray-50">
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Product Info */}
                <div className="flex flex-col justify-center">
                    <div className="mb-8">
                        <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                        <h1 className="text-3xl font-light mb-4">{product.title}</h1>
                        <p className="text-2xl mb-6">${product.price}</p>
                        <button className="w-full md:w-auto px-8 py-3 bg-black text-white flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
                            <ShoppingCartIcon size={20} />
                            Add to Cart
                        </button>
                    </div>
                    <div className="border-t border-gray-100 pt-6">
                        <h2 className="text-sm font-medium mb-3">Customer Reviews</h2>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <StarIcon
                                        key={i}
                                        size={18}
                                        className={`${i < fullStars ? 'text-yellow-500 fill-yellow-500' : i === fullStars && hasHalfStar ? 'text-yellow-500 fill-yellow-500' : 'text-gray-200'}`}
                                    />
                                ))}
                            </div>
                            <span className="text-sm text-gray-600">
                                {product.rating} ({fakeReviews.length} reviews)
                            </span>
                        </div>
                        <div className="space-y-6">
                            {fakeReviews.map((comment) => (
                                <div
                                    key={comment.id}
                                    className="border-b border-gray-100 pb-6 last:border-0"
                                >
                                    <div className="flex items-center justify-between mb-2">
                                        <p className="font-medium text-sm">{comment.name}</p>
                                        <span className="text-xs text-gray-500">
                                            {comment.date}
                                        </span>
                                    </div>
                                    {renderStars(comment.rating)}
                                    <p className="mt-2 text-sm text-gray-600">
                                        {comment.comment}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <Button onClick={() => setShowReviewForm(!showReviewForm)}>
                            {showReviewForm ? "Close" : "Review"}
                        </Button>
                        {showReviewForm && <ReviewForm />}
                    </div>
                </div>

            </div>
        </main>
    )
}

export default ProductDetailPage