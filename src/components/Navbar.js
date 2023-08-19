import React from 'react'
import { FaShoppingCart } from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import { useSelector } from "react-redux" 


const Navbar = () => {

   const {cart} = useSelector((state)=>state)

    return (
        <div >
            <nav className='flex flex-row justify-between items-center h-20 max-w-6xl mx-auto'>

                <NavLink to="/" >

                    <div className='ml-5'>

                        <img src="../logo.png" className='h-14' alt='Logo'/>

                    </div>

                </NavLink>

                <div className='text-white flex items-center font-medium mr-5 space-x-6'>

                    <NavLink to="/">

                            <p>Home</p>

                    </NavLink>


                    <NavLink to="/cart">

                        <div className="relative">

                            <FaShoppingCart className='text-2xl' />

                            {
                                cart.length > 0 &&   <span className='absolute -top-1 -right-2 bg-green-500 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white '>{cart.length}</span>
                            } 
                           

                        </div>

                    </NavLink>


                </div>

            </nav>
        </div>
    )
}

export default Navbar
