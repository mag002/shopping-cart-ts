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
  },
  {
    id: '2',
    category: 'phone',
    name: 'iphone',
    price: 620,
    inStock: true
  },
  {
    id: '3',
    category: 'computer',
    name: 'Macbook pro M4 ',
    price: 2100,
    inStock: true
  },
  {
    id: '4',
    category: 'computer',
    name: 'Macbook pro M4 ',
    price: 2100,
    inStock: false
  }
  ]

  // => 3producst => 3JSX
  // .map


  // props / state
  // 


  // | Logo                                       [Home][About][User]|

  // CategoryBadge

  function getFirstItem<T>(arr: T[]): T {
    return arr[0]
  }

  {/* <a href="" className=""></a> */ }

  // Create a navbar component that was include 3 <Button> components
  // WHen click on any button, alert the button name
  // use that <Navbar> component in App.tsx
  // p/s: 3 functions for 3 component will be written on Navbar.tsx
  // Note: research about STATE in react component for next session
  return (
    <div>

      <Navbar></Navbar>

      <div className="grid grid-cols-3 gap-4 mt-3">
        {

          productList.filter(product => {
            if (showInStock) {
              return product.inStock
            } else {
              return true
            }
          }).map(product => {
            return <Product key={product.id} {...product} isShow></Product>
            // Product({key:product.id)
          })
        }
      </div>
    </div>
  )
}

export default App
