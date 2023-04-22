import { createContext, useState } from "react";

export const FlexWorkContext = createContext();

const FlexWorkContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isLogin, setIsLogin] = useState(false);
  const [userId, setUserId] = useState("");

  return (
    <FlexWorkContext.Provider
      value={{ user, setUser, isLogin, setIsLogin, userId, setUserId }}
    >
      {children}
    </FlexWorkContext.Provider>
  );
};

export default FlexWorkContextProvider;
