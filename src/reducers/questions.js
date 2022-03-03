import {
  LOAD_QUESTIONS,
  ADD_QUESTION,
  ADD_QUESTION_ANSWER,
} from "../actions/types";

export default function questions(state = [], action) {
  if (action.type === LOAD_QUESTIONS) {
    return action.questions;
  } else if (action.type === ADD_QUESTION) {
    return {
      ...state,
      [action.question.id]: action.question,
    };
  } else if (action.type === ADD_QUESTION_ANSWER) {
    const { questionId, answer, authedUser } = action;
    return {
      ...state,
      [questionId]: {
        ...state[questionId],
        [answer]: {
          ...state[questionId][answer],
          votes: state[questionId][answer].votes.concat([authedUser]),
        },
      },
    };
  } else {
    return state;
  }
}
