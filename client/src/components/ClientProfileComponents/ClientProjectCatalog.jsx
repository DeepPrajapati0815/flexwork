import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { MdWorkHistory } from "react-icons/md";
import ProjecOverview from "../FreelancerLandingComponents/ProjecOverview";

const ClientProjectCatalog = () => {
  const [isMobile] = useMediaQuery("(max-width: 500px)");
  const [isTab] = useMediaQuery("(max-width: 950px)");

  return (
    <Box color={"white"} w={"95%"} p={5}>
      <Flex mb={10} align={"center"} gap={2} justify={"space-between"}>
        <Stack direction={"row"} justify={"center"} align={"center"}>
          <Heading size={isMobile ? "sm" : "md"}>Project Catalog </Heading>
        </Stack>
      </Flex>
      {false ? (
        <Stack justify={"center"} align={"center"}>
          <MdWorkHistory
            fontSize={isMobile ? "4rem" : isTab ? "6rem" : "8rem"}
          ></MdWorkHistory>
          <Text fontSize={isMobile ? "0.5rem" : "0.8rem"}>
            Your Past Work History
          </Text>
        </Stack>
      ) : (
        <Box border={"1px solid white"}>
          <ProjecOverview></ProjecOverview>
        </Box>
      )}
    </Box>
  );
};

export default ClientProjectCatalog;
