import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./Store";

interface CartState {
  cartState: boolean;
}

const initialState:CartState = {
  cartState: false,
};

const CartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setOpenCart: (state, action:  PayloadAction<boolean>) => {
      state.cartState = action.payload;
    },
    setCloseCart: (state, action:  PayloadAction<boolean>) => {
      state.cartState = action.payload;
    },
  },
});

export const   selectCartState= (state:RootState) => state.cart.cartState;
export const { setOpenCart, setCloseCart } = CartSlice.actions;
export default CartSlice.reducer;
