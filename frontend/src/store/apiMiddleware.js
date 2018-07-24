import { API, urlBase } from "./constants";

export default ({ dispatch, getState }) => next => action => {
  if (action.type !== API) {
    return next(action);
  }

  const { currentUser } = getState();
  let myHeaders = new Headers({
    "Content-Type": "application/json"
  });
  if (currentUser.token) {
    myHeaders.set("Authorization", `Bearer ${currentUser.token}`);
  }
  const config = {
    method: action.method || "GET",
    headers: myHeaders
  };
  if (action.data) {
    config.body = JSON.stringify(action.data);
  }

  const actionCreator = action.success;

  return fetch(`${urlBase}${action.url}`, config)
    .then(res => res.json())
    .then(data => {
      const action = actionCreator(data);
      dispatch(action);
    })
    .catch(err => {
      console.log("in da error");
      console.log(err);
    });
};
