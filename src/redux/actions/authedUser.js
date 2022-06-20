export const SET_AUTHED_USER = "SET_AUTHED_USER";

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
