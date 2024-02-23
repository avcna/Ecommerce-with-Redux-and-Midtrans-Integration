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
            <div key={item.id} className="flex justify-between ">
              <div className={`bg-gradient-to-b ${item.color}`}>
                <img src={item.img} alt="" className="w-[150px]" />
              </div>
              <div>
                <p>{item.title}</p>
                <p>{item.text}</p>
              </div>
              <div><p>${item.price}</p></div>
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
