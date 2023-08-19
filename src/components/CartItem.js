import React from 'react'
import { toast } from "react-hot-toast"
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux"
import { remove } from "../redux/slices/CartSlice"


const CartItem = ( {item,itemIndex}) => {
    const dispatch = useDispatch();

  const removeFromCart = ()=>{
    dispatch(remove(item.id));
    toast.error("Item Removed ");
  }

  return (
    <div >
       <div className='flex flex-row gap-9' >

          <div className='max-h-44 max-w-[150px] mt-16 ml-32'>
            <img src={item.image} className='h-full w-full' />
          </div>

          <div className='flex flex-col gap-3 mt-16 max-w-[300px]'>
            <h1 className='font-bold text-[1.5rem]'>{item.title}</h1>
            <h1 className='w-full text-gray-600 font-normal text-[13px] text-left'>{item.description.split(" ").slice(1,10).join(" ") + "..."}</h1>
            <div>
                <p className='mb-3 text-green-600 font-semibold'>${item.price}</p>
                <div onClick={removeFromCart}>
                    <FcDeleteDatabase className='text-[2rem]  border shadow'/>
                </div>

            </div>
           
          </div>

       </div>
       <div className='h-[2px] bg-slate-600 mt-6 ml-36 w-[500px]'></div>
    </div>
  )
}

export default CartItem
