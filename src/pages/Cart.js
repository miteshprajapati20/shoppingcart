import React from 'react'
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CartItem from '../components/CartItem'
import { useState } from 'react'
import { useEffect } from 'react'

const Cart = () => {

    const { cart } = useSelector((state) => state)
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart])

    return (
        <div className='flex justify-center items-center'>
            {
                (cart.length > 0) ?
                    (<div className='flex flex-row '>

                        <div>
                            {
                                cart.map((item, index) => {
                                    return <CartItem
                                        key={item.id} item={item} itemIndex={index} />
                                })
                            }
                        </div>

                        {/* SummaryPart */}

                        <div className='mt-20 ml-28' >
                            <div>
                                <div className='font-bold text-lg text-green-600'>Your Cart </div>
                                <div className='font-bold text-[2rem]  text-green-600'>Summary</div>
                                <p className='font-bold text-lg '>
                                    <span>Total Items: {cart.length}</span>
                                </p>
                            </div>



                            {/* checkoutPart */}
                            <div>
                                <p className='text-slate-700 font-medium'>Total Amount: <span className='font-extrabold'>${totalAmount}</span></p>
                                <button className='text-white text-[1.5rem] bg-green-700 rounded-lg p-1 '>
                                    checkout Now
                                </button>
                            </div>

                        </div>

                    </div>) :


                    (
                        //   EmptyPart
                        <div className='justify-center mt-80'>
                            <h2 className='font-semibold text-[1.5rem] mb-3'>
                                Your Cart is Empty
                            </h2>
                            <Link to="/">
                                <button className='text-white text-[1.5rem] bg-green-700 rounded-lg p-1 ml-9'>
                                    Shop Now
                                </button>
                            </Link>
                        </div >)
            }
        </div >
    )
}

export default Cart
