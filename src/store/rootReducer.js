import { combineReducers } from "redux";
import userActionReducer from "./user/userReducer";
export const rootReducer = combineReducers({
    user: userActionReducer,
});