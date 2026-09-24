import { createContext, useState } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState([]);
  const [registeredUsers, setRegisteredUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("registeredUsers")) || [];
  });
  console.log("registered users->", registeredUsers);
  return (
    <Auth.Provider
      value={{
        registeredUsers,
        setRegisteredUsers,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
