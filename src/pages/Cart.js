import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import { useState, useEffect } from 'react';

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 md:px-8">
      {cart.length > 0 ? (
        // Cart has items
        <div className="md:flex md:space-x-4">
          <div className="md:w-3/4">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          <div className="md:w-1/4 mt-10 md:mt-0">
            <div>
              <div className="font-bold text-lg text-green-600">Your Cart</div>
              <div className="font-bold text-2xl text-green-600">Summary</div>
              <p className="font-bold text-lg">
                <span>Total Items: {cart.length}</span>
              </p>
            </div>

            <div className="mt-4">
              <p className="text-slate-700 font-medium">
                Total Amount: <span className="font-extrabold">${totalAmount}</span>
              </p>
              <button className="text-white text-xl bg-green-700 rounded-lg p-2 mt-4">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Cart is empty
        <div className="flex flex-col items-center mt-20">
          <h2 className="font-semibold text-xl mb-3">Your Cart is Empty</h2>
          <Link to="/">
            <button className="text-white text-xl bg-green-700 rounded-lg p-2">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
