import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import PharmaLogin from './components/PharmaLogin/PharmaLogin'
import Medicine from './pages/Home/Medicine/Medicine'


const App = () => {
  return (
    <>
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/pharmalogin' element={<PharmaLogin/>} />
        <Route path='/medicine' element={<Medicine/>} />
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
