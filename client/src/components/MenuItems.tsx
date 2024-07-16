import { useState } from 'react';
import { MenuItem } from '../types';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {
  menuItem: MenuItem;
};

const MenuItems = ({ menuItem }: Props) => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

  return (
    <Card className="cursor-pointer p-4 shadow-md rounded-lg">
      <CardHeader className="mb-2">
        <CardTitle className="text-xl font-semibold">{menuItem.name}</CardTitle>
      </CardHeader>
      <CardContent className="font-bold">
        ₹{(menuItem.price / 100).toFixed(2)}
        <div className="flex items-center  justify-center mt-4 space-x-4">
        <button
            className="bg-red-500 text-white w-10 h-10 flex items-center justify-center rounded-full border border-red-700"
          onClick={decrement}
          disabled={quantity === 0}
        >
          -
        </button>
        <span className="text-xl font-semibold">{quantity}</span>
        <button
           className="bg-green-500 text-white w-10 h-10 flex items-center justify-center rounded-full border border-green-700"
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