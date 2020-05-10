import { createStore, combineReducers } from "redux";
import appReducer from "./appReducer";

const rootReducer = combineReducers({
  appPage: appReducer,
});
const store = createStore(rootReducer);

export default store;
