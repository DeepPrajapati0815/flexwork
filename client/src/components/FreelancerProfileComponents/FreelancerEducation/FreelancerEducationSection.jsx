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
import { MdCastForEducation } from "react-icons/md";
import EducationModal from "./EducationModal";

const FreelancerEducationSection = () => {
  const [isMobile] = useMediaQuery("(max-width: 500px)");
  const [isTab] = useMediaQuery("(max-width: 950px)");

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box color={"white"} w={"95%"} p={5}>
      <Flex mb={10} align={"center"} gap={2} justify={"space-between"}>
        <Stack direction={"row"} justify={"center"} align={"center"}>
          <Heading size={isMobile ? "sm" : "md"}>Education Details</Heading>
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
          <EducationModal isOpen={isOpen} onClose={onClose}></EducationModal>
        </Stack>
      </Flex>
      <Stack justify={"center"} align={"center"}>
        <MdCastForEducation
          fontSize={isMobile ? "4rem" : isTab ? "6rem" : "8rem"}
        ></MdCastForEducation>
        <Text fontSize={isMobile ? "0.5rem" : "0.8rem"}>
          Highlighting relevant educations can boost your visibility in our
          search results. (+10%)
        </Text>
        <Text
          fontSize={isMobile ? "0.5rem" : "0.8rem"}
          color={"blue"}
          onClick={onOpen}
          textDecoration={"underline"}
          cursor={"pointer"}
        >
          Add Your Education
        </Text>
      </Stack>
    </Box>
  );
};

export default FreelancerEducationSection;
