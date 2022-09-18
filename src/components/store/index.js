import { applyMiddleware, createStore } from "redux";
import reducer from "../reducers/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(reducer, composedEnhancer);

store.subscribe(() => {
  // console.log(store);
});

export default store;
