import React, { useReducer } from "react";
import TeamContext from "./index";
import TeamReducer from "./TeamReducer";

const StateTeam = ({ children }) => {
  const initialState = {
    team: null,
  };

  const [state, dispatch] = useReducer(TeamReducer, initialState);

  const setTeam = (teamId) => {
    dispatch({
      type: "SET_TEAM",
      payload: teamId,
    });
  };

  return (
    <TeamContext.Provider
      value={{
        team: state.team,
        setTeam: setTeam,
      }}
    >
      {children}
    </TeamContext.Provider>
  );
};

export default StateTeam;
