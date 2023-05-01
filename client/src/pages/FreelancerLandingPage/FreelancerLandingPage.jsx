import React, { useContext, useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import FreelancerLandingTabs from "../../components/FreelancerLandingComponents/FreelancerLandingTabs";
import ProjectOverview from "../../components/FreelancerLandingComponents/ProjectOverview";
import FreelancerLandingProfile from "../../components/FreelancerLandingComponents/FreelancerLandingProfile";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useMediaQuery } from "@chakra-ui/react";
import { FlexWorkContext } from "../../context/ContextStore";
import axios from "../../utils/axiosInstance";

const FreelancerLandingPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 500px)");
  const [isTab] = useMediaQuery("(max-width: 950px)");
  const [projects, setProjects] = useState([]);

  const { setFreelancerProfile, user, freelancerProfile } =
    useContext(FlexWorkContext);

  const getProfileData = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/freelancer/profile/${user._id}`
      );
      const { _id, title, description, skills } = data.data;
      setFreelancerProfile({
        ...freelancerProfile,
        skills,
        _id,
        title,
        description,
        userId: user._id,
      });
    } catch (error) {}
  };

  // get all the projects
  const getAllClientProjects = async () => {
    try {
      const { data } = await axios.get("/api/v1/client/project");
      setProjects(data.data);
      console.log("projects", projects);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setFreelancerProfile({ ...freelancerProfile, userId: user._id });
    getProfileData();
    getAllClientProjects();
  }, [user]);

  return (
    <Box width={"98vw"} display={"flex"} p={isMobile ? 5 : 0}>
      <Flex direction={"row"}>
        <Box
          overflowY={"scroll"}
          height={"100vh"}
          w={isMobile ? "85vw" : isTab ? "90vw" : "65vw"}
          minWidth={"65vw"}
          flex={2}
          m={isMobile ? 1 : 5}
          p={10}
          bg={"#1a202c"}
          rounded={"2xl"}
        >
          <SearchBar></SearchBar>
          <FreelancerLandingTabs></FreelancerLandingTabs>
          {projects.map((project, index) => {
            return <ProjectOverview key={index} project={project} />;
          })}
        </Box>
        <Box
          flex={1}
          height={"fit-content"}
          my={5}
          p={3}
          display={{
            base: "none", // 0-48em
            md: "none", // 48em-80em,
            lg: "block",
          }}
          bg={"#1a202c"}
          rounded={"2xl"}
        >
          <FreelancerLandingProfile></FreelancerLandingProfile>
        </Box>
      </Flex>
    </Box>
  );
};

export default FreelancerLandingPage;
