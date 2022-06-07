import React, { useState, createContext } from "react";
import accounts from "./accounts.json"

export const LoginContext = createContext([]);

export const LoginContextProvider = ({ children }) => {
  const [users, setUsers] = useState(accounts);

  const isUserExist = (login, password) => {
    for (let i = 0; i < users.length; i++){

      let obj = users[i];

      if (login === obj["Login"] && password === obj["Password"])
        return true;

    }
    return false;
  }

  const providerValue = {
    users,
    setUsers,
    isUserExist
  };

  return <LoginContext.Provider value={providerValue}>{children}</LoginContext.Provider>;
};