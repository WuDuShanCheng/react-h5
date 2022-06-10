import { combineReducers } from "redux";
import user from "./user";
import settings from "./settings";
import app from "./app";

export default combineReducers({
  user,
  settings,
  app
});
