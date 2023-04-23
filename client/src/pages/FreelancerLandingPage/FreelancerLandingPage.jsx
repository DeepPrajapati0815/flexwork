import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import FreelancerLandingTabs from "../../components/FreelancerLandingComponents/FreelancerLandingTabs";
import ProjecOverview from "../../components/FreelancerLandingComponents/ProjecOverview";
import FreelancerLandingProfile from "../../components/FreelancerLandingComponents/FreelancerLandingProfile";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useMediaQuery } from "@chakra-ui/react";

const FreelancerLandingPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 500px)");
  const [isTab] = useMediaQuery("(max-width: 950px)");

  return (
    <Box width={"98vw"} display={"flex"} p={isMobile ? 5 : 0}>
      <Flex direction={"row"}>
        <Box
          w={isMobile ? "85vw" : isTab ? "90vw" : "65vw"}
          flex={2}
          m={isMobile ? 1 : 5}
          p={10}
          bg={"#1a202c"}
          rounded={"2xl"}
        >
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
