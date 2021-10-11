const TeamReducer = (state, action) => {
  switch (action.type) {
    case "SET_TEAM":
      return { ...state, team: action.payload };
    default:
      return state;
  }
};

export default TeamReducer;
