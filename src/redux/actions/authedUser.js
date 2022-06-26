export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const LOGOUT_AUTHED_USER = "LOGOUT_AUTHED_USER";

export function setAuthedUser(id, img) {
  return {
    type: SET_AUTHED_USER,
    id,
    img,
  };
}

export function handleSetAuthedUser(id, img) {
  return (dispatch) => {
    dispatch(setAuthedUser(id, img));
  };
}

export function logoutAuthedUser() {
  return {
    type: LOGOUT_AUTHED_USER,
  };
}

export function handleLogoutAuthedUser() {
  return (dispatch) => {
    dispatch(setAuthedUser());
  };
}
