import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./Store";

export interface Item {
  id: string;
  title: string;
  text: string;
  rating: string;
  btn?: string;
  img: string;
  price: string;
  color: string;
  shadow: string;
  cartQuantity?: number;
}

interface CartState {
  cartState: boolean;
  cartItem: Item[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
}

const initialState: CartState = {
  cartState: false,
  cartItem: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const CartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setOpenCart: (state, action: PayloadAction<boolean>) => {
      state.cartState = action.payload;
    },
    addToCart: (state, action: PayloadAction<Item>) => {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (itemIndex >= 0) {
        state.cartItem[itemIndex].cartQuantity! += 1;
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItem.push(temp);
      }
    },
    getTotal: (state) => {
      let { totalAmount, totalQty } = state.cartItem.reduce(
        (acc, item) => {
          const { price, cartQuantity } = item;
          const totalAmt =
            parseInt(price) * (cartQuantity == undefined ? 0 : cartQuantity);
          acc.totalAmount += totalAmt;
          acc.totalQty += cartQuantity == undefined ? 0 : cartQuantity;
          return acc;
        },
        { totalAmount: 0, totalQty: 0 },
      );
      state.cartTotalQuantity = totalQty;
      state.cartTotalAmount = totalAmount;
    },
    increaseQty: (state,action: PayloadAction<Item>) => {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id,
      );
        state.cartItem[itemIndex].cartQuantity! += 1;
    },
    decreaseQty: (state, action: PayloadAction<Item>) =>{
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id,
      );
        state.cartItem[itemIndex].cartQuantity! -= 1;
        if (state.cartItem[itemIndex].cartQuantity! <= 0){
          delete state.cartItem[itemIndex].cartQuantity;
          state.cartItem.splice(itemIndex, itemIndex+1);
        }
    },
    clearCart:(state)=>{
      state.cartItem = [];
    }
  },
});

export const selectCartState = (state: RootState) => state.cart.cartState;
export const selectCartItem = (state: RootState) => state.cart.cartItem;
export const selectCartTotalQuantity = (state: RootState) =>
  state.cart.cartTotalQuantity;
export const selectCartTotalAmount = (state: RootState) =>
  state.cart.cartTotalAmount;
export const { setOpenCart, addToCart, getTotal, increaseQty, decreaseQty, clearCart } =
  CartSlice.actions;
export default CartSlice.reducer;
