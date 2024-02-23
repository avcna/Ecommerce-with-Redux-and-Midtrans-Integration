import React from "react";
import emptyBag from "../../assets/emptybag.png";

const CartEmpty: React.FC = () => {
  return (
    <div className="flex justify-center flex-col items-center h-screen gap-6">
      <img src={emptyBag} alt="" className="w-[180px] mx-auto" />
    </div>
  );
};

export default CartEmpty;
