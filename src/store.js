import { createStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducers } from "./reducers";

export const store = createStore(reducers, composeWithDevTools());
