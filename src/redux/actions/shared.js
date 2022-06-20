import { getInitialData } from "../../utils/api";
import { receiveUsers } from "./users";
import { receivePolls } from "./polls";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then((res) => {
      dispatch(receiveUsers(res.users));
      dispatch(receivePolls(res.polls));
      dispatch(hideLoading());
    });
  };
}
