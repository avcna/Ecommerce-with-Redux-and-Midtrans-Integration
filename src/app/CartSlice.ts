import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./Store";

interface Item {
  id: string;
  title: string;
  text: string;
  rating: string;
  btn: string;
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
}

const initialState: CartState = {
  cartState: false,
  cartItem: [],
  cartTotalQuantity: 0,
};

const CartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setOpenCart: (state, action: PayloadAction<boolean>) => {
      state.cartState = action.payload;
    },
    setCloseCart: (state, action: PayloadAction<boolean>) => {
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
  },
});

export const selectCartState = (state: RootState) => state.cart.cartState;
export const selectCartItem = (state: RootState) => state.cart.cartItem;
export const { setOpenCart, setCloseCart, addToCart } = CartSlice.actions;
export default CartSlice.reducer;
