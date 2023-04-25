import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Flex,
  Heading,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { GoLocation } from "react-icons/go";
import { MdModeEdit } from "react-icons/md";
import FreelancerHeaderModal from "./FreelancerHeaderModal";
import { FlexWorkContext } from "../../../context/ContextStore";

const FreelancerProfileHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { user } = useContext(FlexWorkContext);

  const [freelancerPersonalDetails, setFreelancerPersonalDetails] = useState({
    firstName: "",
    lastName: "",
    city: "",
    email: "",
    state: "",
  });

  useEffect(() => {
    setFreelancerPersonalDetails({
      firstName: user?.firstName ? user.firstName : "",
      lastName: user?.lastName ? user.lastName : "",
      city: user?.city ? user.city : "",
      email: user?.email ? user.email : "",
      state: user?.state ? user.state : "",
    });
  }, [user]);

  return (
    <Card bg={"#1a202c"} color={"white"}>
      <CardHeader>
        <Flex spacing="4" flex="1" gap="4" flexWrap="wrap">
          <Box pos={"relative"}>
            <Avatar
              size={"xl"}
              src={user?.profileImg}
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
            <Stack direction={"row"}>
              <Heading fontWeight={"semibold"} size="lg">
                {user.firstName && user?.lastName
                  ? user.firstName + " " + user.lastName
                  : "Edit your name"}
              </Heading>
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
              <FreelancerHeaderModal
                freelancerPersonalDetails={freelancerPersonalDetails}
                setFreelancerPersonalDetails={setFreelancerPersonalDetails}
                isOpen={isOpen}
                onClose={onClose}
              ></FreelancerHeaderModal>
            </Stack>
            <Flex justify={"left"} align={"center"} gap={2}>
              <GoLocation />
              <Text color={"gray.300"}>
                {" "}
                {freelancerPersonalDetails.city},{" "}
                {freelancerPersonalDetails.state}
              </Text>
            </Flex>
          </Box>
        </Flex>
      </CardHeader>
    </Card>
  );
};

export default FreelancerProfileHeader;
