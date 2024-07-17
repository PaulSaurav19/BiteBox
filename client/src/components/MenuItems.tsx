import { useState } from 'react';
import { MenuItem } from '../types';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {
  menuItem: MenuItem;
  addToCart: (menuItem: MenuItem,  action: 'increment' | 'decrement') => void;
};

const MenuItems = ({ menuItem, addToCart }: Props) => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => { 
    setQuantity(quantity + 1);
    addToCart(menuItem, 'increment');
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      addToCart(menuItem, 'decrement');
    }
  };

  return (
    <Card className="cursor-pointer p-6 shadow-md rounded-lg transition-transform transform hover:scale-105">
      <CardHeader className="mb-2">
        <CardTitle className="text-2xl font-semibold">• {menuItem.name}</CardTitle>
      </CardHeader>
      <CardContent className="font-bold">
      <p className="text-lg font-semibold text-gray-700 mb-4">
        ₹{(menuItem.price / 100).toFixed(2)}
        </p>
        <div className="flex items-center justify-center mt-4 space-x-4">
        <button
            className="bg-red-500 text-white w-10 h-10 flex items-center justify-center rounded-full border border-red-700 transition duration-300 hover:bg-red-600"
          onClick={decrement}
          disabled={quantity === 0}
        >
          -
        </button>
        <span className="text-xl font-semibold">{quantity}</span>
        <button
           className="bg-green-500 text-white w-10 h-10 flex items-center justify-center rounded-full border border-green-700 transition duration-300 hover:bg-green-600"
          onClick={increment}
        >
          +
        </button>
      </div>
      </CardContent>
      
    </Card>
  );
};

export default MenuItems;