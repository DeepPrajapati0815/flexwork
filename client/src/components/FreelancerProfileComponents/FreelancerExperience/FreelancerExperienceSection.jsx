import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { BsClockHistory } from "react-icons/bs";
import ExperienceModal from "./ExperienceModal";

const FreelancerExperienceSection = () => {
  const [isMobile] = useMediaQuery("(max-width: 500px)");
  const [isTab] = useMediaQuery("(max-width: 950px)");

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box color={"white"} w={"95%"} p={5}>
      <Flex mb={10} align={"center"} gap={2} justify={"space-between"}>
        <Stack direction={"row"} justify={"center"} align={"center"}>
          <Heading size={isMobile ? "sm" : "md"}>
            Employment History | Other Experiences
          </Heading>

          <AddIcon
            onClick={onOpen}
            style={{
              borderRadius: "50%",
              padding: "2px",
              background: "#e2e9e2",
              color: "#2e4e74",
              cursor: "pointer",
              fontSize: "1.6rem",
            }}
            color={"white"}
          ></AddIcon>
          <ExperienceModal isOpen={isOpen} onClose={onClose}></ExperienceModal>
        </Stack>
      </Flex>
      <Stack justify={"center"} align={"center"}>
        <BsClockHistory
          fontSize={isMobile ? "4rem" : isTab ? "6rem" : "8rem"}
        ></BsClockHistory>
        <Text fontSize={isMobile ? "0.5rem" : "0.8rem"}>
          Highlighting relevant experiences can boost your visibility in our
          search results. (+5%)
        </Text>
        <Text
          onClick={onOpen}
          fontSize={isMobile ? "0.5rem" : "0.8rem"}
          color={"blue"}
          textDecoration={"underline"}
          cursor={"pointer"}
        >
          Add Your Experience
        </Text>
      </Stack>
    </Box>
  );
};

export default FreelancerExperienceSection;
