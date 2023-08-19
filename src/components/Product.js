import React from 'react'
import { useSelector , useDispatch } from "react-redux"
import { add,remove } from "../redux/slices/CartSlice"
import { toast } from "react-hot-toast"


const Product = ({ post }) => {
   
    // const cart = useSelector((state) => state.cart);
    const {cart} = useSelector((state) => state);

    const dispatch = useDispatch();

    const addToCart = ()=> {
        dispatch(add(post));
        toast.success("Item added to Cart")
    }

    const removeFromCart = ()=> {
        dispatch(remove(post.id));
        toast.error("Item remove from Cart")
    }

    return (
        <div className='flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] '>

            <div className='text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>
                <p>{post.title.split(" ").slice(0,3).join(" ")+ "..." }</p>
            </div>

            <div>
                <p className='w-40 text-gray-600 font-normal text-[13px] text-left'>{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
            </div>

            <div className='h-[180px]'>
                <img src={post.image} className='h-full w-full' />
            </div>

            

            <div className='flex justify-between gap-12 items-center w-full mt-5'>
            <div>
                <p className='text-green-600 font-semibold'>${post.price}</p>
            </div>
            {
            cart.some((p)=> p.id === post.id) ?
            (
                <button onClick={removeFromCart}
                className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[13px] p-1 px-2 hover:bg-gray-700 
                transition duration-300 ease-in hover:text-white  uppercase'
                >
                    Remove Item
                </button>
            ) :
            (
                <button onClick={addToCart}
                className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[13px] p-1 px-2 hover:bg-gray-700
                transition duration-300 ease-in  hover:text-white  uppercase'
                >
                    Add to Cart
                </button>
            )
           }
            </div>

         
        </div>
    );
};

export default Product
