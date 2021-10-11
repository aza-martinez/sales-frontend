import React, { useReducer } from "react";
import UserContext from "./index";
import UserReducer from "./UserReducer";

const StateUser = ({ children }) => {
  const initialState = {
    user: null,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);
  //
  const setUser = (userId) => {
    dispatch({
      type: "SET_USER",
      payload: userId,
    });
  };

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        setUser: setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default StateUser;
