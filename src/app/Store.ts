import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";

const Store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});
export type RootState = ReturnType<typeof Store.getState>;
export default Store;
