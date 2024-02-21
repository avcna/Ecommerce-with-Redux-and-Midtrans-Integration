import React from "react";
import CartCount from "./cart/CartCount";
import CartItem from "./cart/CartItem";
import CartEmpty from "./cart/CartEmpty";

const Cart: React.FC = () => {
  return (
    <div className="fixed top-0 bottom-0 blur-effect-theme w-full h-screen">
      <div className="blur-effect-theme w-1/2 absolute right-0">
        <CartCount>
          {/* <CartItem /> */}
          <CartEmpty/>
        </CartCount>
      </div>
    
    </div>
  );
};

export default Cart;
