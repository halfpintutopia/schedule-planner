import { setTokens } from "./userActions";
import { SET_LOGIN_STATUS, SERVER_URL } from "../constants";

export const getTokens = (body, props, dispatch, getState) => {
  if (!getState().tokens.access) {
    const headers = new Headers({
      "content-type": "application/json"
    });
    const config = {
      method: "POST",
      body: JSON.stringify(body),
      headers: headers
    };
    fetch(SERVER_URL + "auth/token/", config)
      .then(response => {
        // console.log(response);
        return response.json();
      })
      .then(data => {
        if (data && data.access) {
          const action = setTokens(data);
          dispatch(action);
          const loginStatusAction = {
            type: SET_LOGIN_STATUS,
            payload: {
              loginStatus: "logedin"
            }
          };
          dispatch(loginStatusAction);
          localStorage.setItem("tokens", JSON.stringify(data));
          props.history.push("/");
        } else {
          alert("Wrong username or password");
        }
      });
  } else {
    props.history.push("/");
  }
};
