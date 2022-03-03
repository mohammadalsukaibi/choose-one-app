import { createStore, applyMiddleware } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducers } from "./reducers";
import thunk from "redux-thunk";

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
