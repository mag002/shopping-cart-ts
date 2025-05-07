import { CartProduct } from "../types"

function CartItem({ cartItem }: { cartItem: CartProduct }) {
    const { title, thumbnail, price, quantity } = cartItem
    return <div className="px-3">
        <div className="flex gap-3 items-center border-b-1 border-b-gray-300">
            <img className="w-2/12 max-w-[200px]" src={thumbnail} alt="" />
            <h3 className="w-2/12 text-lg">{title}</h3>
            <p className="w-2/12">{price}</p>
            <div><div className="relative flex items-center max-w-[8rem]">
                <button type="button" id="decrement-button" data-input-counter-decrement="quantity-input" className="bg-gray-100    hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 -gray-700 focus:ring-2 focus:outline-none">
                    <svg className="w-3 h-3 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                    </svg>
                </button>
                <input type="text" id="quantity-input" data-input-counter aria-describedby="helper-text-explanation" className="border-y-1 bg-gray-50 border-x-0 border-y-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5   -400  -blue-500 -blue-500" placeholder={quantity.toString()} required />
                <button type="button" id="increment-button" data-input-counter-increment="quantity-input" className="bg-gray-100    hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 -gray-700 focus:ring-2 focus:outline-none">
                    <svg className="w-3 h-3 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                    </svg>
                </button>
            </div></div>
            <h4 className="w-2/12 text-right">{(price * quantity).toFixed(2)}</h4>
            <button className="ml-auto w-1/12 w-[30px] h-[30px] text-white rounded-4xl bg-gray-500 flex items-center justify-center">X</button>

        </div>
    </div>
}
export default CartItem