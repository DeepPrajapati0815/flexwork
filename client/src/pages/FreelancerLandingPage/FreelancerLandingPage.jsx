import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import FreelancerLandingTabs from "../../components/FreelancerLandingComponents/FreelancerLandingTabs";
import ProjecOverview from "../../components/FreelancerLandingComponents/ProjecOverview";
import FreelancerLandingProfile from "../../components/FreelancerLandingComponents/FreelancerLandingProfile";
import SearchBar from "../../components/SearchBar/SearchBar";

const FreelancerLandingPage = () => {
  return (
    <Box width={"90vw"} display={"flex"}>
      <Flex direction={"row"}>
        <Box flex={2} m={5} p={10} bg={"#1a202c"} rounded={"2xl"}>
          <SearchBar></SearchBar>
          <FreelancerLandingTabs></FreelancerLandingTabs>
          <ProjecOverview></ProjecOverview>
          <ProjecOverview></ProjecOverview>
          <ProjecOverview></ProjecOverview>
          <ProjecOverview></ProjecOverview>
          <ProjecOverview></ProjecOverview>
          <ProjecOverview></ProjecOverview>
        </Box>
        <Box
          flex={1}
          height={"fit-content"}
          my={5}
          p={4}
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
