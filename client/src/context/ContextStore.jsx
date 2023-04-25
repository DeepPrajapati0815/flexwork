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

  const [refresh, setRefresh] = useState(0);

  return (
    <FlexWorkContext.Provider
      value={{
        user,
        setUser,
        freelancerProfile,
        setFreelancerProfile,
        refresh,
        setRefresh,
      }}
    >
      {children}
    </FlexWorkContext.Provider>
  );
};

export default FlexWorkContextProvider;
