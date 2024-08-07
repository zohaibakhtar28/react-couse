import React, { useContext, useState } from "react";
import { createContext } from "react";
export const UserContext = createContext();
export const UserContextProvider = UserContext.Provider;

import ComponentB from "./ComponentB";

function ComponentA() {
  const [user, setUser] = useState("Zohaib");
  return (
    <div className="box">
      <h1>Component A</h1>
      <h2>{`Hello ${user}`}</h2>
      <UserContextProvider value = {user}>
        <ComponentB user={user} />
      </UserContextProvider>
    </div>
  );
}

export default ComponentA;
