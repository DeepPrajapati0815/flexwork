import { createContext, useState } from "react";

export const FlexWorkContext = createContext();

const FlexWorkContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const [freelancerProfile, setFreelancerProfile] = useState({
    _id: "",
    title: "",
    description: "",
    skills: [],
    userId: "",
  });

  return (
    <FlexWorkContext.Provider
      value={{
        user,
        setUser,
        freelancerProfile,
        setFreelancerProfile,
      }}
    >
      {children}
    </FlexWorkContext.Provider>
  );
};

export default FlexWorkContextProvider;
