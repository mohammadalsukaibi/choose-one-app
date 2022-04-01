import { LOAD_USERS, ADD_QUESTION, ADD_QUESTION_ANSWER } from "../actions/types";

export default function users(state = [], action) {
  if (action.type === LOAD_USERS) {
    return action.users;
  } else if (action.type === ADD_QUESTION) {
    return {
      ...state,
      [action.question.creator]: {
        ...state[action.question.creator],
        questions: state[action.question.creator].questions.concat([action.question.id])
      }
    };

  } else if (action.type === ADD_QUESTION_ANSWER) {
    const { questionId, answer, authedUser } = action;
    return {
      ...state,
      [authedUser]: {
        ...state[authedUser],
        answers: {
          ...state[authedUser].answers,
          [questionId]: answer
        }
      }

    };
  } else {
    return state;
  }
}
