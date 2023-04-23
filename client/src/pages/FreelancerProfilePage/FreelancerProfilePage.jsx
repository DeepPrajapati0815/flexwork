import { AddIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Divider,
  Flex,
  HStack,
  Heading,
  Stack,
  Tag,
  TagLabel,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { GoLocation } from "react-icons/go";
import {
  MdCastForEducation,
  MdModeEdit,
  MdWorkHistory,
  MdWorkOutline,
} from "react-icons/md";

import { BsClockHistory } from "react-icons/bs";

const FreelancerProfilePage = () => {
  const [isMobile] = useMediaQuery("(max-width: 500px)");
  const [isTab] = useMediaQuery("(max-width: 950px)");

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

      <Box color={"white"} w={"95%"} p={5}>
        <Flex mb={10} align={"center"} gap={2} justify={"space-between"}>
          <Stack direction={"row"} justify={"center"} align={"center"}>
            <Heading size={isMobile ? "sm" : "md"}>Portfolio</Heading>

            <AddIcon
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
          </Stack>
        </Flex>
        <Stack justify={"center"} align={"center"}>
          <MdWorkOutline
            fontSize={isMobile ? "4rem" : isTab ? "6rem" : "8rem"}
          ></MdWorkOutline>
          <Text fontSize={isMobile ? "0.5rem" : "0.8rem"}>
            Talent who add portfolios to their profile are more likely to win
            work. (+20%)
          </Text>
          <Text
            fontSize={isMobile ? "0.5rem" : "0.8rem"}
            color={"blue"}
            textDecoration={"underline"}
            cursor={"pointer"}
          >
            Add a Portfolio
          </Text>
        </Stack>
      </Box>

      <Divider />

      <Box color={"white"} w={"95%"} p={5}>
        <Flex mb={10} align={"center"} gap={2} justify={"space-between"}>
          <Stack direction={"row"} justify={"center"} align={"center"}>
            <Heading size={isMobile ? "sm" : "md"}>Skills</Heading>

            <AddIcon
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
          </Stack>
        </Flex>
        <Flex marginLeft={5} gap={3} flexWrap={"wrap"}>
          <HStack spacing={4}>
            {["md"].map((size) => (
              <Tag
                size={size}
                key={size}
                borderRadius="full"
                variant="solid"
                color={"gray.800"}
                colorScheme="whiteAlpha"
              >
                <TagLabel fontSize={isMobile ? "0.5rem" : "0.8rem"}>
                  Blockchain
                </TagLabel>
              </Tag>
            ))}
          </HStack>

          <HStack spacing={4}>
            {["md"].map((size) => (
              <Tag
                size={size}
                key={size}
                borderRadius="full"
                variant="solid"
                color={"gray.800"}
                colorScheme="whiteAlpha"
              >
                <TagLabel fontSize={isMobile ? "0.5rem" : "0.8rem"}>
                  Javascript
                </TagLabel>
              </Tag>
            ))}
          </HStack>

          <HStack spacing={4}>
            {["md"].map((size) => (
              <Tag
                size={size}
                key={size}
                borderRadius="full"
                variant="solid"
                color={"gray.800"}
                colorScheme="whiteAlpha"
              >
                <TagLabel fontSize={isMobile ? "0.5rem" : "0.8rem"}>
                  React
                </TagLabel>
              </Tag>
            ))}
          </HStack>
        </Flex>
      </Box>

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

      <Box color={"white"} w={"95%"} p={5}>
        <Flex mb={10} align={"center"} gap={2} justify={"space-between"}>
          <Stack direction={"row"} justify={"center"} align={"center"}>
            <Heading size={isMobile ? "sm" : "md"}>Education Details</Heading>
            <AddIcon
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
            textDecoration={"underline"}
            cursor={"pointer"}
          >
            Add Your Education
          </Text>
        </Stack>
      </Box>
      <Divider />

      <Box color={"white"} w={"95%"} p={5}>
        <Flex mb={10} align={"center"} gap={2} justify={"space-between"}>
          <Stack direction={"row"} justify={"center"} align={"center"}>
            <Heading size={isMobile ? "sm" : "md"}>
              Employment History | Other Experiences
            </Heading>

            <AddIcon
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
            fontSize={isMobile ? "0.5rem" : "0.8rem"}
            color={"blue"}
            textDecoration={"underline"}
            cursor={"pointer"}
          >
            Add Your Experience
          </Text>
        </Stack>
      </Box>
    </Box>
  );
};

export default FreelancerProfilePage;
