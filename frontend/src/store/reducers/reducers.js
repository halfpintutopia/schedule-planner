import { combineReducers } from "redux";
import user from "./reducers";

const initialState = {};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // dispatching to the reducer the data that is passed in
    case "LOGIN":
      console.log('in the authReducer, case: "LOGIN');
      const userToken = {
        token: action.payload.token
      };
      const newState = {
        ...state,
        ...userToken
      };
      return newState;
    default:
      return state;
      console.log(state);
  }
};

export const showOverview = (state = {}, action) => {
  switch (action.type) {
    case "REQUEST":
      return state;
    default:
      return state;
  }
};

// CombineReducers object - pile all the reducers
const rootReducer = combineReducers({
  authReducer,
  showOverview
});

export default rootReducer;
