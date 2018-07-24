import { getTokens } from "./getTokens";
import { AUTHORIZE_USER, SET_LOGIN_STATUS } from "../constants";

export const login = user => {
  return {
    type: "LOGIN",
    payload: { user }
  };
};

export const fetchLogin = credentials => dispatch => {
  const headers = new Headers({ "Content-Type": "application/json" });
  const body = JSON.stringify(credentials);
  console.log("in the fetchLogin", body);
  const config = {
    // mode: "no-cors",
    headers: headers,
    body: body,
    method: "POST"
  };
  return fetch("http://localhost:8080/api/auth/token/", config)
    .then(res => res.json())
    .then(data => {
      console.log("the data", data);
      const token = JSON.stringify(data.access);
      localStorage.setItem("access", token);
      dispatch(login(data.access));
      return data.access;
    });
};

export const checkRole = token => (dispatch, getState) => {
  // console.log("====================================");
  // console.log("tokeeeen", token);
  // console.log("====================================");
  const headers = new Headers({
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  });

  const config = { headers: headers, method: "GET" };

  return fetch("http://localhost:8080/api/me/", config)
    .then(res => res.json())
    .then(data => {
      console.log("the data ---- user object", data.user.is_superuser);
      return data;
    });
};

export const request = information => {
  return {
    type: "REQUEST",
    payload: { information }
  };
};

export const fetchRequest = information => dispatch => {
  console.log("information", information);
  const headers = new Headers({
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  });
  const config = {
    headers: headers,
    method: "POST"
  };
  // return fetch("http://localhost:8080/api/overview", config)
  //   .then(res => res.json())
  //   .then(data => {
  //     dispatch(request(data));
  //     console.log("the request data - keys!", data);
  //   });
};

export const loginAction = (state, props) => {
  return (dispatch, getState) => {
    if (!state.email || !state.password) {
      alert("Both email and password are required");
      return;
    }
    // getTokens(state, props, dispatch, getState);
  };
};

// getuser is the action creator
// actions represent the facts about 'what happened'
// the reducers that update the state according to those actions
// export const getUser = user => ({
//   // the action is:
//   type: "GET_USER",
//   payload: user
// });
// const user = { first_name, last_name }

export const user = (state = {}, action) => {
  switch (action.type) {
    case "GET_USER":
      return action.payload;
    default:
      return state;
  }
};

export const setTokens = data => {
  return {
    type: AUTHORIZE_USER,
    payload: {
      data
    }
  };
};

export const logOutAction = props => {
  return (dispatch, getState) => {
    localStorage.clear();
    const action = setTokens({});
    dispatch(action);
    const loginStatusAction = {
      type: SET_LOGIN_STATUS,
      payload: {
        loginStatus: "loggedout"
      }
    };
    dispatch(loginStatusAction);
    props.history.push("/login");
  };
};
