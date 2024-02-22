import React from "react";
import emptyBag from "../../assets/emptybag.png";

const CartEmpty: React.FC = () => {
  return (
    <div className="flex justify-center flex-col items-center h-screen gap-6">
      <img src={emptyBag} alt="" className="w-[180px] mx-auto" />
      <button className="bg-theme-cart text-white p-1 rounded-md">
        back to home
      </button>
    </div>
  );
};

export default CartEmpty;
