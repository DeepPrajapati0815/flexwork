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

  const [clientProfile, setClientProfile] = useState({
    _id: "",
    companyName: "",
    description: "",
    isVerified: false,
    userId: "",
  });

  const [clientProjectPostDetails, setClientProjectPostDetails] = useState({
    title: "",
    description: "",
    category: "",
    skills: [],
    scope: "small",
    duration: "1 month",
    experienceType: "fresher",
    projectRate: "",
    file: "",
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
        clientProfile,
        setClientProfile,
        clientProjectPostDetails,
        setClientProjectPostDetails,
      }}
    >
      {children}
    </FlexWorkContext.Provider>
  );
};

export default FlexWorkContextProvider;
