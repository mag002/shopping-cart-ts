import './App.css'
import Button from './components/Button'
import Product from './components/Product'
import Example from './Example'
import Navbar from './components/Navbar'
import { useState } from 'react'
import { CartItem, Product as ProductType } from './types'
// 1 function 
// return JSX element

function User(props: any) {
  return <div>
    <h3>User component - {props.name}</h3>
    <div>
      {props.children}
    </div>
  </div>
}

function App() {
  const [showInStock, setShowInStock] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([])
  const productList: ProductType[] = [{
    id: '1',
    category: 'tablet',
    name: 'Ipad pro 11 inch',
    price: 450,
    inStock: true,
    image: 'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png'
  },
  {
    id: '2',
    category: 'phone',
    name: 'iphone',
    price: 620,
    inStock: true,
    image: 'https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png'

  },
  {
    id: '3',
    category: 'computer',
    name: 'Macbook pro M4 ',
    price: 2100,
    inStock: true,
    image: 'https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/thumbnail.png'

  },
  {
    id: '4',
    category: 'computer',
    name: 'Macbook pro M4 ',
    price: 2100,
    inStock: false,
    image: 'https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png'
  }
  ]

  /**
   * 

    

     <p>🛒 {totalItems} sản phẩm</p>
      <div>
        <ul>
          <li> <image> <h4>title</h4> x <span>quantity</span> = <span> total</span> <button>X</button>
        </ul>
      </div>
      <p>Tổng: {totalPrice.toLocaleString()}₫</p>

   */
  function addToCart(product: ProductType): void {
    const existingIndex = cart.findIndex(c => c.product.id === product.id);
    if (existingIndex >= 0) {
      // return cart.map(c =>
      //   c.product.id === product.id ? { ...c, quantity: c.quantity + 1 } : c
      // );
      const newCart = [...cart];
      newCart[existingIndex].quantity++;
      setCart(newCart)

    } else {
      const newCart = [...cart, { product, quantity: 1 }];
      setCart(newCart)
    }
  }

  return (
    <div>

      <Navbar cart={cart}></Navbar>

      <div className="grid grid-cols-3 gap-4 mt-3">
        {

          productList.filter(product => {
            if (showInStock) {
              return product.inStock
            } else {
              return true
            }
          }).map(product => {
            return <Product onAddToCart={addToCart} key={product.id} product={product}></Product>
            // Product({key:product.id)
          })
        }
      </div>
    </div>
  )
}

export default App
