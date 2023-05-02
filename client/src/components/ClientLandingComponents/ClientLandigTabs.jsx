import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const ClientLandingTabs = () => {
  const navigate = useNavigate();

  const handleClick = (prop) => {
    if (prop == "all") {
      navigate("/client");
    } else if (prop == "draft") {
      navigate("/client?draft");
    } else if (prop == "published") {
      navigate("/client?published");
    }
  };
  return (
    <Tabs colorScheme="blue">
      <Text color={"gray.300"} mb={6} fontSize={"2xl"} fontWeight={"bold"}>
        Jobs you might like
      </Text>
      <TabList color={"gray"}>
        <Tab onClick={() => handleClick("all")}>All Projects</Tab>
        <Tab onClick={() => handleClick("draft")}>Draft Projects</Tab>
        <Tab onClick={() => handleClick("published")}>Published Projects</Tab>
      </TabList>

      <TabPanels></TabPanels>
    </Tabs>
  );
};

export default ClientLandingTabs;
