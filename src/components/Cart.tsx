import React, { useEffect } from "react";
import CartCount from "./cart/CartCount";
import CartItem from "./cart/CartItem";
import CartEmpty from "./cart/CartEmpty";
import { useDispatch, useSelector } from "react-redux";
import {
  getTotal,
  selectCartItem,
  selectCartState,
  selectCartTotalAmount,
} from "../app/CartSlice";

const Cart: React.FC = () => {
  const ifCartState = useSelector(selectCartState);
  const dispatch = useDispatch();
  const totalAmount = useSelector(selectCartTotalAmount);
  const cartItems = useSelector(selectCartItem);
  useEffect(() => {
    dispatch(getTotal());
  }, [cartItems, dispatch]);
  return (
    <div
      className={`fixed top-0 bottom-0 blur-effect-theme w-full h-screen ${
        ifCartState ? "visible" : "invisible"
      }`}
    >
      <div className="blur-effect-theme w-1/2 absolute right-0 h-screen overflow-y-scroll">
        <CartCount>
          {cartItems.length>0? <CartItem totalAmount={totalAmount} cartItems={cartItems} />:<CartEmpty />}
         
         
        </CartCount>
      </div>
    </div>
  );
};

export default Cart;
