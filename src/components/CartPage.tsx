import { useEffect, useState } from "react"
import CartItem from "./CartItem";
import Spinner from "./Spinner";
import { CartProduct } from "../types";


function CartSpinner() {
    return <div className="flex justify-center items-center min-h-[300px]">
        <Spinner />
    </div>
}
// micro frontend
//

function CartPage() {
    const [cart, setCart] = useState<CartProduct[]>([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        fetchData()
    }, [])


    const fetchData = async () => {
        try {
            setIsLoading(true)
            const res = await fetch('https://dummyjson.com/carts/1');
            const data = await res.json()
            setCart(data.products);
            setIsLoading(false);
        } catch (e) {

            console.log(e)
        }
    }

    function fetchDataPromise() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('DATA FETCHED!')
            }, 5000)
        })
    }

    return <div className="flex gap-5 p-3">


        <div className=" shadow w-8/12 rounded">
            {
                isLoading ? <CartSpinner /> : cart.map((item) => {

                    return <CartItem cartItem={item} />
                })
            }
            {/* Cart product */}
            {/* <CartItem />
            <CartItem />
            <CartItem /> */}
            {/* NOTE:
            NextDay: 
            -   Custom Hook / Global state management / Pagination
            -   Handle Update cart 
            Exercise: 
            -   Handle 404
            -   Implement Add/remove/update cart to integrate with dummy json
            -   Implement ProductDetailPage UI
            */}
        </div>
        <div className=" shadow w-4/12 rounded">b</div>
    </div>
}

export default CartPage