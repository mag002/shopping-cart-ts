import { useState } from 'react'
import './App.css'
import CartPage from './components/CartPage'
import Navbar from './components/Navbar'
import { Cart } from './types'

import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router";
import ProductListPage from './components/ProductListPage'
import ProductDetailPage from './components/ProductDetailPage'
import CounterProvider from './context/useCounterContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Home page</div>
  },
  {
    path: '/product',
    element: <ProductListPage />
  },
  {
    path: '/cart',
    element: <CartPage />
  }
])


function App() {


  const mockCart: Cart = {
    "id": 1,
    "products": [
      {
        "id": 144,
        "title": "Cricket Helmet",
        "price": 44.99,
        "quantity": 4,
        "total": 179.96,
        "discountPercentage": 11.47,
        "discountedTotal": 159.32,
        "thumbnail": "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/thumbnail.png"
      },
      // more products
    ],
    "total": 4794.8,
    "discountedTotal": 4288.95,
    "userId": 142,
    "totalProducts": 5,
    "totalQuantity": 20
  };



  return (
    <CounterProvider>
      <BrowserRouter>
        <Navbar cart={mockCart}></Navbar>
        {/* // swtich case | default*/}
        <Routes>
          <Route path="/" element={<div>Homepage</div>} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product" element={<ProductListPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="*" element={<h1>404 not found!</h1>} />
        </Routes>
      </BrowserRouter>
    </CounterProvider>
  )
}

export default App
