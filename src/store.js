import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice"; // Attention à l'import automatique !
import cartSlice from "./features/cartSlice"; // Attention à l'import automatique !

export default configureStore({
  reducer: {
    // Attention à l'import automatique !
    counter: counterSlice,
    cart: cartSlice,
  },
});
