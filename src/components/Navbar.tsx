import { useContext, useState } from "react";
import { Cart } from "../types"
import Button from "./Button"
import { NavLink } from "react-router";
import useCounter from "../utils/useCounter";
import { CounterContext } from "../context/useCounterContext";


// useContext
// use[customHook]

function Navbar({ cart }: { cart: Cart }) {
    const [open, setOpen] = useState(false);
    // const { count, increase, decrease } = useCounter()
    const counterContext = useContext(CounterContext);


    console.log(counterContext)
    // function handleNavbarItemClick(title: string): void {
    //     alert(title)
    // }
    const totalItems = cart.totalQuantity;
    return <nav className="navbar py-2">
        <div>
            Logo
            {/* 
            {count}
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button> */}
            {JSON.stringify(counterContext)}

        </div>
        <div>
            {/* // onclick => setState BrowserRouter => re-render component | update browser path */}

            <NavLink to="/" >
                {({ isActive }) => {
                    return <Button className={isActive ? 'bg-black text-white' : 'bg-white text-black'}>Home</Button>
                }}
            </NavLink>
            <NavLink to="/product" >
                {({ isActive }) => {
                    return <Button className={isActive ? 'bg-black text-white' : 'bg-white text-black'}>Product</Button>
                }}
            </NavLink>

            <div className="relative" >
                <Button className="h-full" onClick={() => setOpen(!open)}>
                    🛒 ({cart.totalQuantity})
                </Button>
                {open && <div className="mt-3 p-3 absolute right-0 top-full bg-white text-black min-w-[350px] width shadow rounded flex flex-col items-flex-start text-left gap-2" >
                    <p className="font-bold">🛒 {totalItems} sản phẩm</p>
                    <div>
                        <ul>
                            {cart.products.map((product) => {
                                return <li className="flex gap-1 items-center mb-2 border-b-[#d2d2d2] border-b pb-2"> <image /> <h4>{product.title}</h4> x <span>{product.quantity}</span> = <span> {(product.quantity * product.price).toLocaleString()}₫</span> <Button className="ml-auto bg-red-500">X</Button></li>
                            })}
                        </ul>
                    </div>
                    <p>Tổng: <b>{cart.total}₫</b></p>
                    <NavLink to="/cart" >
                        <button className="rounded bg-black text-white p-3">View All</button>
                    </NavLink>

                </div>}
            </div>
        </div>


    </nav >
}

export default Navbar