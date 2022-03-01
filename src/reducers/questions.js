import { LOAD_QUESTIONS } from "../actions/types";

export default function questions(state = [], action) {
  if (action.type === LOAD_QUESTIONS) {
    return action.questions;
  } else {
    return state;
  }
}
