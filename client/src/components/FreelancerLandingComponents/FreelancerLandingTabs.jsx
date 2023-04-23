import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";

const FreelancerLandingTabs = () => {
  return (
    <Tabs colorScheme="blue">
      <Text color={"gray.300"} mb={6} fontSize={"2xl"} fontWeight={"bold"}>
        Jobs you might like
      </Text>
      <TabList color={"gray"}>
        <Tab>Best Matches</Tab>
        <Tab>Most Recent</Tab>
        <Tab>Saved Jobs</Tab>
      </TabList>

      <TabPanels></TabPanels>
    </Tabs>
  );
};

export default FreelancerLandingTabs;
