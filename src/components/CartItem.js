import React from 'react';
import { toast } from 'react-hot-toast';
import { FcDeleteDatabase } from 'react-icons/fc';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/CartSlice';

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error('Item Removed');
  };

  return (
    <div className="flex flex-col md:flex-row border rounded-md p-4 mb-4">
      <div className="md:w-1/4">
        <img src={item.image} alt={item.title} className="w-full md:max-w-xs mx-auto md:mx-0" />
      </div>

      <div className="md:w-3/4 md:pl-4">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-2 md:mb-0">
            <h1 className="text-xl font-semibold mb-2">{item.title}</h1>
            <p className="text-gray-600">
              {item.description.split(' ').slice(1, 10).join(' ') + '...'}
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-xl font-semibold">${item.price}</p>
            <div className="cursor-pointer ml-4" onClick={removeFromCart}>
              <FcDeleteDatabase className="text-red-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
