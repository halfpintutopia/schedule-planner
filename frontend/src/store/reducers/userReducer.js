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
