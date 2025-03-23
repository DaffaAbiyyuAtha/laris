import auth from "./auth";
import profile from "./profile";
import { combineReducers } from "@reduxjs/toolkit";

const reducer = combineReducers({
  auth,
  profile
});

export default reducer;