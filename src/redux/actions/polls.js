import { saveQuestion, saveQuestionAnswer } from "../../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export const RECEIVE_POLLS = "RECEIVE_POLLS";
export const TOGGLE_POLL = "TOGGADD_POLLLE_POLL";
export const ADD_POLL = "ADD_POLL";
export const ADD_ANSWER = "ADD_ANSWER";

function addPoll(poll) {
  return {
    type: ADD_POLL,
    poll,
  };
}

function addAnswer(addAnswer) {
  return {
    type: ADD_ANSWER,
    addAnswer,
  };
}

export function handleAddPoll(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser.id,
    })
      .then((poll) => dispatch(addPoll(poll)))
      .then(() => dispatch(hideLoading()));
  };
}

export function handleAnswerPoll(answer, qid) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    let authedUserID = authedUser.id;

    dispatch(showLoading());

    return saveQuestionAnswer({
      authedUser: authedUserID,
      answer,
      qid,
    })
      .then(dispatch(addAnswer({ answer, qid, authedUserID })))
      .then(() => dispatch(hideLoading()));
  };
}

export function receivePolls(polls) {
  return {
    type: RECEIVE_POLLS,
    polls,
  };
}
