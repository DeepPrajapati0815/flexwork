import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  Heading,
  Stack,
  Tag,
  TagLabel,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useState } from "react";
import SkillModal from "./SkillModal";

const FreelancerSkill = () => {
  const [isMobile] = useMediaQuery("(max-width: 500px)");
  const [isTab] = useMediaQuery("(max-width: 950px)");

  const [skills, setSkills] = useState(new Set([]));

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box color={"white"} w={"95%"} p={5}>
      <Flex mb={10} align={"center"} gap={2} justify={"space-between"}>
        <Stack direction={"row"} justify={"center"} align={"center"}>
          <Heading size={isMobile ? "sm" : "md"}>Skills</Heading>

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
          <SkillModal
            skills={skills}
            setSkills={setSkills}
            isOpen={isOpen}
            onClose={onClose}
          ></SkillModal>
        </Stack>
      </Flex>
      <Flex gap={3} flexWrap={"wrap"}>
        {Array.from(skills).map(
          (skill, i) =>
            skill !== "" && (
              <Tag
                size={"md"}
                key={i}
                borderRadius="full"
                variant="solid"
                color={"gray.800"}
                colorScheme="whiteAlpha"
              >
                <TagLabel fontSize={isMobile ? "0.5rem" : "0.8rem"}>
                  {skill}
                </TagLabel>
              </Tag>
            )
        )}
      </Flex>
    </Box>
  );
};

export default FreelancerSkill;
