import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { GoLocation } from "react-icons/go";
import { MdModeEdit, MdWorkHistory } from "react-icons/md";

import FreelancerEducationSection from "../../components/FreelancerProfileComponents/FreelancerEducation/FreelancerEducationSection";
import FreelancerExperienceSection from "../../components/FreelancerProfileComponents/FreelancerExperience/FreelancerExperienceSection";
import FreelancerPortfolioSection from "../../components/FreelancerProfileComponents/FreelancerPortfolio/FreelancerPortfolioSection";
import FreelancerSkill from "../../components/FreelancerProfileComponents/FreelnacerSkill/FreelancerSkill";
import FreelancerProfileTitleModal from "../../components/FreelancerProfileComponents/FreelancerProfileSection/FreelancerProfileTitleModal";

const FreelancerProfilePage = () => {
  const [isMobile] = useMediaQuery("(max-width: 500px)");
  const [isTab] = useMediaQuery("(max-width: 950px)");

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      w={"90vw"}
      p={5}
      margin={"auto"}
      my={10}
      background={"#1a202c"}
      rounded={"2xl"}
    >
      <Card bg={"#1a202c"} color={"white"}>
        <CardHeader>
          <Flex spacing="4" flex="1" gap="4" flexWrap="wrap">
            <Box pos={"relative"}>
              <Avatar
                size={"xl"}
                src={"https://avatars.githubusercontent.com/u/88894883?v=4"}
                alt={"Avatar Alt"}
                mb={4}
                pos={"relative"}
                _after={{
                  content: '""',
                  w: 4,
                  h: 4,
                  bg: "green.300",
                  border: "2px solid white",
                  rounded: "full",
                  pos: "absolute",
                  bottom: 0,
                  right: 3,
                }}
              />

              <MdModeEdit
                style={{
                  position: "absolute",
                  borderRadius: "50%",
                  padding: "2px",
                  background: "#e2e9e2",
                  color: "#2e4e74",
                  top: 0,
                  cursor: "pointer",
                  left: 10,
                  fontSize: "1.6rem",
                }}
                color={"white"}
              ></MdModeEdit>
            </Box>
            <Box>
              <Heading fontWeight={"semibold"} size="lg">
                Deep Prajapati
              </Heading>
              <Flex justify={"center"} align={"center"} gap={2}>
                <GoLocation />
                <Text color={"gray.300"}>
                  {" "}
                  Ahmedabad, India – 6:07 pm local time
                </Text>
              </Flex>
            </Box>
          </Flex>
        </CardHeader>
      </Card>

      <Divider color={"gray.900"} />

      <Box color={"white"} w={"95%"} p={5}>
        <Flex
          mb={10}
          direction={isTab ? "column" : "row"}
          align={"flex-start"}
          justify={"space-between"}
        >
          <Stack direction={"row"} align={"center"} justify={"center"}>
            <Text
              width={"fit-content"}
              fontWeight={"bold"}
              fontSize={isMobile ? "0.8rem" : isTab ? "1.4rem " : "1.8rem"}
            >
              Full Stack Software Developer
            </Text>
            <MdModeEdit
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
            ></MdModeEdit>

            <FreelancerProfileTitleModal
              isOpen={isOpen}
              onClose={onClose}
            ></FreelancerProfileTitleModal>
          </Stack>
          <Stack direction={"row"} justify={"center"} align={"center"}>
            <Text
              width={"fit-content"}
              fontWeight={"bold"}
              fontSize={isMobile ? "0.8rem" : isTab ? "1.4rem " : "1.8rem"}
            >
              ₹100/hr
            </Text>

            <MdModeEdit
              style={{
                borderRadius: "50%",
                padding: "2px",
                background: "#e2e9e2",
                color: "#2e4e74",
                cursor: "pointer",
                fontSize: "1.6rem",
              }}
              color={"white"}
            ></MdModeEdit>
          </Stack>
        </Flex>
        <Stack direction={"row"} justify={"space-between"}>
          <Text
            w={isMobile ? "100%" : "85%"}
            fontSize={isMobile ? "0.5rem" : "1rem"}
          >
            I am a skilled full-stack developer with experience in React.js,
            Node.js, and Web3.js. I am passionate about blockchain technology
            and have worked with Solidity smart contracts to build decentralized
            applications (DApps). As a front-end developer, I have experience
            with React.js and have developed user-friendly interfaces for web
            applications. I have also worked with Web3.js to integrate Ethereum
            blockchain into web applications, enabling users to interact with
            smart contracts directly from their browsers. As a Node.js backend
            developer, I have experience in building RESTful APIs,
            microservices. I have also worked with databases like MongoDB and
            MYSQL to store and manage data for web applications. In addition, I
            have a understanding of blockchain technology and have worked with
            Solidity smart contracts to build DApps that provide secure and
            transparent data sharing. I have experience in developing and
            auditing secure smart contracts that meet business requirements.
          </Text>
          <MdModeEdit
            style={{
              borderRadius: "50%",
              padding: "2px",
              background: "#e2e9e2",
              color: "#2e4e74",
              cursor: "pointer",
              fontSize: "1.6rem",
            }}
            color={"white"}
          ></MdModeEdit>
        </Stack>
      </Box>

      <Divider />
      <FreelancerPortfolioSection></FreelancerPortfolioSection>

      <Divider />
      <FreelancerSkill></FreelancerSkill>
      <Divider />

      <Box color={"white"} w={"95%"} p={5}>
        <Flex mb={10} align={"center"} gap={2} justify={"space-between"}>
          <Stack direction={"row"} justify={"center"} align={"center"}>
            <Heading size={isMobile ? "sm" : "md"}>
              Your Project Catalog{" "}
            </Heading>
          </Stack>
        </Flex>
        <Stack justify={"center"} align={"center"}>
          <MdWorkHistory
            fontSize={isMobile ? "4rem" : isTab ? "6rem" : "8rem"}
          ></MdWorkHistory>
          <Text fontSize={isMobile ? "0.5rem" : "0.8rem"}>
            Your Past Work History
          </Text>
        </Stack>
      </Box>

      <Divider />
      <FreelancerEducationSection></FreelancerEducationSection>
      <Divider />
      <FreelancerExperienceSection></FreelancerExperienceSection>
    </Box>
  );
};

export default FreelancerProfilePage;
