import React from "react";
import { Item } from "../../app/CartSlice";

interface ICartItem {
  totalAmount: number;
  cartItems: Item[];
}

const CartItem: React.FC<ICartItem> = ({ cartItems, totalAmount }) => {
  return (
    <div className=" box-border">
      <div className="p-4 flex flex-col gap-4 ">
        {cartItems.map((item) => {
          return (
            <div key={item.id} className="flex justify-between">
              <div className={`bg-gradient-to-b ${item.color} ${item.shadow} p-2 rounded-lg`}>
                <img src={item.img} alt="" className="w-[150px]" />
              </div>
              <div className=" mx-auto ">
                <p className="font-semibold">{item.title}</p>
                <p className="text-[14px]">{item.text}</p>
                <div className="flex justify-between">
                  <button className="bg-theme-cart text-white py-1 px-4 rounded-md">-</button>
                  <p>{item.cartQuantity}</p>
                  <button className="bg-theme-cart text-white  py-1 px-4 rounded-md">+</button>
                </div>
              </div>
              <div className="mx-auto"><p>${parseInt(item.price)*item.cartQuantity!}</p>
              <button>Delete</button></div>
            </div>
          );
        })}
      </div>
      <div className="sticky bottom-0 p-4 bg-white w-full flex justify-between font-semibold">
        <p>Total Amount :</p>
        <p>${totalAmount}</p>
      </div>
    </div>
  );
};

export default CartItem;
