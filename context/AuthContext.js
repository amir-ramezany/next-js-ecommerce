"use client";

import { createContext, useState } from "react";

const authConext = createContext();

export default function AuthConextProvider({ children }) {
  const [user, setUser] = useState(null);

  function loginContext(user) {
    setUser(user);
  }

  return (
    <authConext.Provider value={{ user, loginContext }}>
      {children}
    </authConext.Provider>
  );
}
export { authConext };
