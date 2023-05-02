import React from "react";

import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";

import { AiOutlineClose } from "react-icons/ai";

import { BiCheck } from "react-icons/bi";
import { useState } from "react";

const ProposalOverview = ({ freelancer, proposal }) => {
  const [isMore, setIsMore] = useState(false);
  console.log(freelancer);
  return (
    <Card
      maxW="90vw"
      my={2}
      bg={"#1a202c"}
      color={"white"}
      border={"1px solid gray"}
    >
      <CardHeader>
        <Flex spacing="2">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar src={freelancer?.profileImg} />

            <Box>
              <Heading size="sm">
                {freelancer?.firstName + " " + freelancer?.lastName}
              </Heading>
              <Text>
                {"Recived at " +
                  proposal?.createdAt.split("T")[0] +
                  " On " +
                  proposal?.createdAt.split("T")[1].split(".")[0]}
              </Text>
            </Box>
          </Flex>
          <Box>
            <IconButton
              colorScheme="red"
              rounded={"full"}
              size={"xs"}
              mx={2}
              icon={<AiOutlineClose rounded={"full"} fontSize={"0.9rem"} />}
            />
            <IconButton
              rounded={"full"}
              size={"xs"}
              colorScheme="whatsapp"
              icon={<BiCheck fontSize={"1rem"} />}
            />
          </Box>
        </Flex>
      </CardHeader>
      <CardBody>
        <Flex justify={"space-between"}>
          <Box w={"80%"}>
            {!isMore && proposal?.coverLetter?.length > 300 && (
              <Text>
                {proposal?.coverLetter.slice(0, 300)}
                <span
                  onClick={() => setIsMore(true)}
                  style={{ color: "lightblue", cursor: "pointer" }}
                >
                  {" ... "}
                </span>
              </Text>
            )}
            {isMore && (
              <Text>
                {proposal?.coverLetter}
                <span
                  onClick={() => setIsMore(false)}
                  style={{ color: "lightblue", cursor: "pointer" }}
                >
                  {" show less "}
                </span>
              </Text>
            )}
          </Box>
          <Stack gap={0} align={"end"}>
            <Text> ₹ {proposal?.expectedBidRate}</Text>
            <Text>{proposal?.duration}</Text>
          </Stack>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default ProposalOverview;
