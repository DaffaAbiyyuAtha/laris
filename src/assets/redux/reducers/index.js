import auth from "./auth";
import profile from "./profile";
import cartSlice from "./cartSlice";
import { combineReducers } from "@reduxjs/toolkit";

const reducer = combineReducers({
  auth,
  profile,
  cart: cartSlice
});

export default reducer;