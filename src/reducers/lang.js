const langReducer = (state = "en", action) => {
  switch (action.type) {
    case "SET":
      return action.payload;
    default:
      return state;
  }
};

export default langReducer;
