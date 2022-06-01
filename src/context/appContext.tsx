import React, { createContext, ReactNode, useContext, useState } from "react";

//Initial Values
const initialValues = {
  isLoggedIn: false,
  setIsLoggedIn: () => {},
};

//Initial Value Types
type initialValueTypes = {
  isLoggedIn: boolean;
  setIsLoggedIn: (newState: boolean) => void;
};

const UserContext = createContext<initialValueTypes>(initialValues);

type UserContextProps = {
  children: ReactNode;
};

export const UseContextProvider = ({ children }: UserContextProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(initialValues.isLoggedIn);
  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export function useContextComponent(): initialValueTypes {
  const context = useContext(UserContext);
  return context;
}
