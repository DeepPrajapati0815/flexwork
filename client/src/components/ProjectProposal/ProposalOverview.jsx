import React, { useContext } from "react";

import {
  Avatar,
  Box,
  Button,
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
import { useNavigate, useParams } from "react-router-dom";
import { FlexWorkContext } from "../../context/ContextStore";
import { toast } from "react-hot-toast";

const ProposalOverview = ({ freelancer, proposal }) => {
  const [isMore, setIsMore] = useState(false);
  const { setRefresh } = useContext(FlexWorkContext);
  const [isLoading, setIsLoading] = useState(false);

  const { id: projectId } = useParams();

  const navigate = useNavigate();

  const approveProposal = async () => {
    try {
      setIsLoading(true);
      await axios.put(
        `/api/v1/client/proposal/${proposal._id}?id=${projectId}`
      );

      setIsLoading(false);

      toast.success("Sent Mail!", {
        style: {
          padding: "16px",
          animationDuration: "2s",
        },
      });

      setRefresh(Math.random() * 6000000);
    } catch (error) {
      console.log(error);
    }
  };

  const rejectProposal = async () => {
    try {
      await axios.delete(
        `/api/v1/client/proposal/${proposal._id}?id=${projectId}`
      );

      toast.success("Sent Mail!", {
        style: {
          padding: "16px",
          animationDuration: "2s",
        },
      });
      setRefresh(Math.random() * 6000000);
    } catch (error) {
      console.log(error);
    }
  };

  const viewProfile = async () => {
    return navigate("/freelancer/profile", {
      state: {
        freelancer,
      },
    });
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

            <Box onClick={viewProfile}>
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
            <>
              <Flex alignItems={"center"} gap={2}>
                <Button colorScheme="whatsapp" size={"xs"} py={4}>
                  schedule meeting
                </Button>
                <Box color={"green"} fontWeight={"bolder"}>
                  Approved
                </Box>
              </Flex>
            </>
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
                isLoading={isLoading}
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
