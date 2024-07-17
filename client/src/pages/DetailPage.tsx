import { useGetRestaurant } from "@/api/RestaurantApi";
import MenuItems from "@/components/MenuItems";
import OrderSummary from "@/components/OrderSummary";
import RestaurantInfo from "@/components/RestaurantInfo";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import { MenuItem } from "@/types";
import { useState } from "react";
import { useParams } from "react-router-dom";


export type CartItem = {
    _id: string;
    name: string;
    price: number;
    quantity: number;
  };

const DetailPage = () => {
  const {restaurantId} = useParams();
  const {restaurant, isLoading} = useGetRestaurant(restaurantId);

  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = sessionStorage.getItem(`cartItems-${restaurantId}`);
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  const addToCart = (menuItem: MenuItem, action: 'increment' | 'decrement') => {
    setCartItems((prevCartItems) => {
        // 1.Check if the item is already in the cart
            const existingCartItem = prevCartItems.find((cartItem)=> cartItem._id === menuItem._id);
            let updatedCartItems;

        // 2. if items is already in the cart, update the quantity
            if(existingCartItem) {
                updatedCartItems = prevCartItems.map((cartItem)=>
                     cartItem._id === menuItem._id 
                ? {...cartItem, quantity: action === 'increment' ? cartItem.quantity + 1 : cartItem.quantity - 1,} 
                : cartItem
            ).filter(cartItem => cartItem.quantity > 0); // Remove item if quantity is 0
        }
        // 3. if items is not in the cart, and action is increment, then add it as a new item 
        else if(action === 'increment') {
                updatedCartItems = [
                    ...prevCartItems, 
                    {
                        _id: menuItem._id,
                        name: menuItem.name,
                        price: menuItem.price,
                        quantity: 1,
                    },
                ];
            }

    //4. if action is decrement and item is not in the cart, then do nothing
        else {
            updatedCartItems = [...prevCartItems];
        }
            
            return updatedCartItems;
    });
  };

  if (isLoading || !restaurant) {
    return "Loading...";
  }

  return (
    <div className="flex flex-col gap-10 px-8">
      <AspectRatio ratio={16 / 5}>
        <img
          src={restaurant.imageUrl}
          className="rounded-md object-cover h-full w-full shadow-lg"
        />
      </AspectRatio>
      <div className="grid md:grid-cols-[4fr_2fr] gap-5 md:px-32">
        <div className="flex flex-col gap-6">
            <RestaurantInfo restaurant={restaurant} />
            <span className="text-2xl font-bold tracking-tight">Menu</span>
            {restaurant.menuItems.map((menuItem) => (
            <MenuItems key={menuItem._id} menuItem={menuItem} addToCart={(menuItem, action) => addToCart(menuItem, action)}/>
          ))}
        </div>

        <div>
          <Card className="shadow-md rounded-lg">
            <OrderSummary restaurant={restaurant} cartItems={cartItems} />
          </Card>
        </div>
            
        </div>
        </div>

        

    );

};

export default DetailPage;