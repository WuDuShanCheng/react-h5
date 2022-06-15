import { combineReducers } from "redux";
import user from "./user";
import settings from "./settings";
import app from "./app";
import tagsView from "./tagsView";

export default combineReducers({
  user,
  settings,
  app,
  tagsView
});
