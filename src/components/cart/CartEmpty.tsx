import React from "react";
import emptyBag from "../../assets/emptybag.png";

const CartEmpty:React.FC = () => {
  return <div className="flex justify-center flex-col">
  <img src={emptyBag} alt="" className="w-[250px]"/>
  <button>back to home</button></div>;
};

export default CartEmpty;
