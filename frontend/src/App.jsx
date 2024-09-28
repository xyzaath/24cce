import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import PharmaLogin from './components/PharmaLogin/PharmaLogin'
import Medicine from './pages/Medicine/Medicine'
import Cart from './pages/Cart/Cart'
import Order from './pages/Order/Order'


const App = () => {
  return (
    <>
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/pharmalogin' element={<PharmaLogin/>} />
        <Route path='/medicine' element={<Medicine/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<Order/>} />
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
