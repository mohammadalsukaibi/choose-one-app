import { combineReducers } from "@reduxjs/toolkit";
import users from "./users";
import questions from "./questions";

export const reducers = combineReducers({ users, questions });
