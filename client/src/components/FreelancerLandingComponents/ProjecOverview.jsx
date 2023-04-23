import { ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  HStack,
  Heading,
  Icon,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

const ProjecOverview = () => {
  const [isProjectLiked, setIsProjectLiked] = useState(false);

  return (
    <Card
      bg={"#1a202c"}
      color={"white"}
      borderBottom={"1px solid gray"}
      borderRadius={0}
    >
      <CardHeader>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Box>
              <Heading size="sm">
                Make my Blockchain Dapp A Chrome Extension
              </Heading>
              <Text color={"gray.400"}>
                Fixed-price - Expert - Est. Budget: $200 - Posted 48 minutes ago
              </Text>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>
          Looking for Web3 native freelancers in all types of markets &
          positions to help us with a research project about crypto payments and
          wallets ! We're looking for people with experience using wallets and
          making payments in the crypto space. We're interested in hearing your
          personal experiences and insights! All you need to do is fill out the
          quick sign-up form
        </Text>
      </CardBody>

      <Flex marginLeft={5} gap={3} flexWrap={"wrap"}>
        <HStack spacing={4}>
          {["md"].map((size) => (
            <Tag
              size={size}
              key={size}
              borderRadius="full"
              variant="solid"
              color={"gray.300"}
              colorScheme="whiteAlpha"
            >
              <TagLabel>Blockchain</TagLabel>
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
              color={"gray.300"}
              colorScheme="whiteAlpha"
            >
              <TagLabel>Javascript</TagLabel>
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
              color={"gray.300"}
              colorScheme="whiteAlpha"
            >
              <TagLabel>React</TagLabel>
            </Tag>
          ))}
        </HStack>
      </Flex>
      <Text marginLeft={5} marginTop={3} color={"gray.400"}>
        Proposals: 5 to 10
      </Text>

      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        w={"100%"}
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      >
        <Button
          flex="2"
          display={"flex"}
          justifyContent={"center"}
          gap={2}
          alignItems={"center"}
          variant="unstyled"
          colorScheme="pink"
          onClick={(e) => setIsProjectLiked(!isProjectLiked)}
        >
          {isProjectLiked ? (
            <AiFillHeart color="#E90064" />
          ) : (
            <AiFillHeart color="white" />
          )}{" "}
          Like
        </Button>
        <Button
          flex="1"
          style={{ background: "#394867" }}
          onMouseOver={(e) => {
            e.target.style.background = "#212A3E";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "#394867";
          }}
          colorScheme="blue"
        >
          Apply Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjecOverview;
