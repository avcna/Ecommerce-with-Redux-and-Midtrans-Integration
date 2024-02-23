import { ChevronDoubleLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, selectCartTotalQuantity, setOpenCart } from "../../app/CartSlice";

interface ICartCount {
  children: ReactNode;
}

const CartCount: React.FC<ICartCount> = ({ children }) => {
  const dispatch = useDispatch();
  const items = useSelector(selectCartTotalQuantity)
  const onCartToggle = () => {
    dispatch(setOpenCart(false));
  };
  return (
    <div className="h-screen">
      <div className="flex justify-between items-center bg-white w-full py-4 px-2">
        <div className="flex gap-x-2">
          <button onClick={onCartToggle}>
            <ChevronDoubleLeftIcon className="w-[20px]" />
          </button>
          <p>
            Your Cart{" "}
            <span className="bg-slate-900 p-1 rounded-md text-white">
              ({items} items)
            </span>
          </p>
        </div>
        <button className="bg-slate-900 p-1 rounded-md" onClick={()=>dispatch(clearCart())}>
          <XMarkIcon className="w-[20px] text-white" />
        </button>
      </div>
      {children}
    </div>
  );
};

export default CartCount;
