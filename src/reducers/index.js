import { combineReducers } from "@reduxjs/toolkit";
import users from "./users";
import questions from "./questions";
import activeUser from "./activeUser";
export const reducers = combineReducers({ users, questions, activeUser });
