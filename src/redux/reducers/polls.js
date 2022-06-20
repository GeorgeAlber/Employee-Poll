import { RECEIVE_POLLS, ADD_POLL, ADD_ANSWER } from "../actions/polls";

export default function polls(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POLLS:
      return {
        ...state,
        ...action.polls,
      };
    case ADD_POLL:
      return {
        ...state,
        [action.poll.id]: action.poll,
      };
    case ADD_ANSWER:
      return {
        ...state,
        [action.addAnswer.qid]: {
          ...state[action.addAnswer.qid],
          [action.addAnswer.answer]: {
            ...state[action.addAnswer.qid][action.addAnswer.answer],
            votes: state[action.addAnswer.qid][
              action.addAnswer.answer
            ].votes.concat(action.addAnswer.authedUserID),
          },
        },
      };
    default:
      return state;
  }
}
