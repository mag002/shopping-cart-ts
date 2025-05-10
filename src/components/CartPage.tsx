import { useContext, useEffect, useState } from "react"
import CartItem from "./CartItem";
import Spinner from "./Spinner";
import { CartProduct } from "../types";
import useCounter from "../utils/useCounter";
import useFetchData from "../utils/useFetchData";
import { CounterContext } from "../context/useCounterContext";


function CartSpinner() {
    return <div className="flex justify-center items-center min-h-[300px]">
        <Spinner />
    </div>
}

function CartPage() {
    const { data, isLoading, fetchData } = useFetchData('https://dummyjson.com/carts/1')

    // const { count, increase, decrease } = useCounter();
    const cart: CartProduct[] = data.products || [];

    const counterContext = useContext(CounterContext);

    useEffect(() => {
        fetchData()
    }, [])


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
        <div className=" shadow w-4/12 rounded">
            {/* {count} */}
            <button onClick={counterContext.increase}>+</button>
            <button onClick={counterContext.decrease}>-</button>
            {JSON.stringify(counterContext.counter)}
        </div>
    </div>
}

export default CartPage