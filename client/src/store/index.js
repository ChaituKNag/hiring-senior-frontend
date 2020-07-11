import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { defaultState, rootReducer } from "./reducers";

const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));

export default store;
