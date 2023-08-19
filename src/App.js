import React from 'react'
import Navbar from './components/Navbar'
import { Routes ,Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'

const App = () => {
  return (
    <div className=''>
      <div className='bg-[#0f172a] '>
        <Navbar />
      </div>
      <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>}  />
             
      </Routes>
    </div>

  )
}

export default App
