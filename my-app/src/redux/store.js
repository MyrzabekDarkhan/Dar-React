import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducers from "./reducers";
import thunk from "redux-thunk";

export default createStore(
    appReducers,
    composeWithDevTools(applyMiddleware(thunk))
);