import React from "react";
import { Item, decreaseQty, increaseQty } from "../../app/CartSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

interface ICartItem {
  totalAmount: number;
  cartItems: Item[];
}

const CartItem: React.FC<ICartItem> = ({ cartItems, totalAmount }) => {
  const dispatch = useDispatch();
  const checkOut=async() => {
    const data = {
      gross_amount: totalAmount,
      order_id: "SEPATU",
      customer_name: "customer",
      customer_email:"customer@email.com"
    }
    try {
      const response = await axios.post("http://localhost:3001/create-transaction", data);
      console.log(response.data.redirect_url);
      window.location.href = response.data.redirect_url;
    } catch (error) {
      alert("Payment failed. Make sure you have integrated the server.");
    }
  };
  return (
    <div className="box-border flex flex-col justify-between w-full h-screen "> 
      <div className="flex flex-col gap-4 p-4 ">
        {cartItems.map((item) => {
          return (
            <div key={item.id} className="flex justify-between">
              <div className={`bg-gradient-to-b ${item.color} ${item.shadow} p-2 rounded-lg`}>
                <img src={item.img} alt="" className="w-[150px]" />
              </div>
              <div className="mx-auto ">
                <p className="font-semibold">{item.title}</p>
                <p className="text-[14px]">{item.text}</p>
                <div className="flex justify-between">
                  <button className="px-4 py-1 text-white rounded-md bg-theme-cart" onClick={()=>dispatch(decreaseQty(item))}>-</button>
                  <p>{item.cartQuantity}</p>
                  <button className="px-4 py-1 text-white rounded-md bg-theme-cart" onClick={()=>dispatch(increaseQty(item))}>+</button>
                </div>
              </div>
              <div className="mx-auto "><p>${parseInt(item.price)*item.cartQuantity!}</p>
              <button>Delete</button></div>
            </div>
          );
        })}
      </div>
      <div className="sticky bottom-0 flex justify-between w-full p-4 font-semibold bg-white">
        <div>
        <p>Total Amount :</p>
        <p className="text-green-700">Rp {totalAmount}</p>
        </div>
        <button className="px-6 py-2 text-white bg-green-700 rounded-md" onClick={checkOut}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;
 