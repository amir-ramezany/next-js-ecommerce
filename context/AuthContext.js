"use client";

import { me } from "@/actions/auth";
import { createContext, useEffect, useState } from "react";

const authConext = createContext();

export default function AuthConextProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function checkedUserLoggedIn() {
      const data = await me();
      if (data?.error) {
        setUser(null);
      } else {
        setUser(data.user);
      }
    }
    checkedUserLoggedIn();
  }, []);

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
