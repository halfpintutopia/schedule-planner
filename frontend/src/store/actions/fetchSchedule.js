export const toggleFollowUser = userId => (dispatch, getState) => {
  const { currentUser } = getState();
  const myHeaders = new Headers({
    Authorization: `Bearer ${currentUser.token}`
  });
  const config = {
    method: "POST",
    headers: myHeaders
  };

  return fetch("https://api.opsgenie.com/v2/schedules", config)
    .then(res => res.json())
    .then(data => {
      console.log("the data", data);

      // const addUserAction = addUser(user);
      // dispatch(addUserAction);
      // const toggleFollowAction = toggleFollow(user._id);
      // dispatch(toggleFollowAction);
    });
};
