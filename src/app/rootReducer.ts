import { combineReducers } from "@reduxjs/toolkit";
import newsReducer from "../modules/news";

const rootReducer = combineReducers({
  news: newsReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
