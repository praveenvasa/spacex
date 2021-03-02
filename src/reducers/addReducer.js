const initialState = {
  launchYear: null,
  successLaunch: null,
  successLand: null,
};
export const addReducer = (state = initialState, action) => {
  console.log("search reducer is called");
  console.log("state", state, "action", action);
  const { payload, type } = action;
  switch (type) {
    case "SET_LAUNCH_YEAR":
      return { ...state, launchYear: payload };
    case "SET_SUCCESS_LAUNCH":
      return { ...state, successLaunch: payload };
    case "SET_SUCCESS_LAND":
      return { ...state, successLand: payload };
    default:
      return state;
  }
};
