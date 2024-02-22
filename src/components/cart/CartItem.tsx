import React from "react";

interface ICartItem{
  totalAmount: number;
}

const CartItem:React.FC<ICartItem> = ({totalAmount}) => {
  return <div className="h-screen">
    <div className="absolute bottom-0 p-4 bg-white w-full flex justify-between">
      <p>Total Amount :</p>
      <p>{totalAmount}</p>
    </div>
  </div>;
};

export default CartItem;
