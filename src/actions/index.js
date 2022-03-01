import { LOAD_USERS, LOAD_QUESTIONS, SET_ACTIVE_USER } from "./types";

// users

export const loadUsers = (users) => {
    return {
        type: LOAD_USERS,
        users
    }
}

// questions

export const loadQuestions = (questions) => {
    return {
        type: LOAD_QUESTIONS,
        questions
    }
}

// set active user