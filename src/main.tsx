import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// Product component
// khai bao interface cho cai props cua product
// id,name,price
/**
 *  <div>
 *    Iphone - 500$
 * </div>
 *
 */

// 3 producst khac nhau tren man hinh

// 17:50 | 20:50