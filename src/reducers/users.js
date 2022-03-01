import { LOAD_USERS } from "../actions/types";

export default function users(state = [], action) {
  if (action.type === LOAD_USERS) {
    return action.users;
  } else {
    return state;
  }
}
