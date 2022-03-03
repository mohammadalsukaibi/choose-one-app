import { getAllQuestions, getAllUsers, addQuestion, addAnswerToQuestion } from "../DATA";
import { LOAD_USERS, LOAD_QUESTIONS, SET_ACTIVE_USER, ADD_QUESTION, ADD_QUESTION_ANSWER } from "./types";

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

export const addToQuestions = (question) => {
    return {
        type: ADD_QUESTION,
        question
    }
}

export const AddQuestionAnswer = ({authedUser, questionId, answer}) => {
    return {
        type: ADD_QUESTION_ANSWER,
        authedUser,
        questionId,
        answer
    }
}

// set active user

export const activeUser = (user) => {
    return {
        type: SET_ACTIVE_USER,
        user
    }
}

// Thunk functions

export const getInitialData = () => {
    return function (dispatch) {
        getAllUsers().then((users) => dispatch(loadUsers(users)));
        getAllQuestions().then((questions) => dispatch(loadQuestions(questions)));
    }
}


export const setActiveUser = (user) => {
    return function (dispatch) {
        dispatch(activeUser(user))
    }
}

export const setQuestion = (question) => {
    return function (dispatch) {
        addQuestion(question).then((res) => dispatch(addToQuestions(res)))
    }
}

export const setQuestionAnswer = (ans) => {
    return function (dispatch) {
        addAnswerToQuestion(ans).then((res) => dispatch(AddQuestionAnswer(ans)))
    }
}