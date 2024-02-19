import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Home'
import ProductDetail from '../ProductDetail'
import Products from '../Products'
import Navbar from '../Navbar'
import CartPage from '../CartPage'
import Checkout from '../Checkout'

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route index element={<Home/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/productDetail/:id' element={<ProductDetail/>} />
      <Route path='/cartpage' element={<CartPage/>} />
      <Route path='/checkout' element={<Checkout/>} />
    </Routes>
      </BrowserRouter>

    </>
  )
}

export default AppRoutes
