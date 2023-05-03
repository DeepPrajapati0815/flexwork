import React, { useContext } from "react";

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
import axios from "../../utils/axiosInstance";
import { useParams } from "react-router-dom";
import { FlexWorkContext } from "../../context/ContextStore";

const ProposalOverview = ({ freelancer, proposal }) => {
  const [isMore, setIsMore] = useState(false);
  const { setRefresh } = useContext(FlexWorkContext);

  const { id: projectId } = useParams();

  const approveProposal = async () => {
    try {
      const res = await axios.put(
        `/api/v1/client/proposal/${proposal._id}?id=${projectId}`
      );
      setRefresh(Math.random() * 6000000);
    } catch (error) {
      console.log(error);
    }
  };

  const rejectProposal = async () => {
    try {
      const res = await axios.delete(
        `/api/v1/client/proposal/${proposal._id}?id=${projectId}`
      );
      setRefresh(Math.random() * 6000000);
    } catch (error) {
      console.log(error);
    }
  };

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
          {proposal?.status === "Accepted" ? (
            <Box color={"green"} fontWeight={"bolder"}>
              Approved
            </Box>
          ) : (
            <Box>
              <IconButton
                colorScheme="red"
                rounded={"full"}
                size={"xs"}
                mx={2}
                icon={<AiOutlineClose rounded={"full"} fontSize={"0.9rem"} />}
                onClick={rejectProposal}
              />
              <IconButton
                rounded={"full"}
                size={"xs"}
                colorScheme="whatsapp"
                onClick={approveProposal}
                icon={<BiCheck fontSize={"1rem"} />}
              />
            </Box>
          )}
        </Flex>
      </CardHeader>
      <CardBody>
        <Flex justify={"space-between"}>
          <Box w={"80%"}>
            {proposal?.coverLetter?.length > 300 && !isMore ? (
              <Text>
                {proposal?.coverLetter?.slice(0, 300)}
                <span
                  onClick={() => setIsMore(true)}
                  style={{ color: "lightblue", cursor: "pointer" }}
                >
                  {" ... "}
                </span>
              </Text>
            ) : proposal?.coverLetter?.length > 300 ? (
              <Text>
                {proposal?.coverLetter}
                <span
                  onClick={() => setIsMore(false)}
                  style={{ color: "lightblue", cursor: "pointer" }}
                >
                  {" show less "}
                </span>
              </Text>
            ) : (
              <Text>
                {proposal?.coverLetter}
                <span
                  onClick={() => setIsMore(false)}
                  style={{ color: "lightblue", cursor: "pointer" }}
                ></span>
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
