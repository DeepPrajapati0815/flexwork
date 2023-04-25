import {
  Box,
  Flex,
  Stack,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { FlexWorkContext } from "../../../context/ContextStore";
import axios from "../../../utils/axiosInstance";
import FreelancerProfileTitleModal from "./FreelancerProfileTitleModal";

const FreelancerProfileAbout = () => {
  const [isMobile] = useMediaQuery("(max-width: 500px)");
  const [isTab] = useMediaQuery("(max-width: 950px)");

  const { user, freelancerProfile, setFreelancerProfile } =
    useContext(FlexWorkContext);

  const getProfileData = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/freelancer/profile/${user._id}`
      );
      const { _id, title, description, skills } = data.data;
      setFreelancerProfile({
        ...freelancerProfile,
        skills,
        _id,
        title,
        description,
        userId: user._id,
      });
    } catch (error) {}
  };

  useEffect(() => {
    setFreelancerProfile({ ...freelancerProfile, userId: user._id });
    getProfileData();
  }, [user]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
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
            {freelancerProfile.title}
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
            freelancerDetails={freelancerProfile}
            setFreelancerDetails={setFreelancerProfile}
            isOpen={isOpen}
            onClose={onClose}
          ></FreelancerProfileTitleModal>
        </Stack>
      </Flex>
      <Stack direction={"row"} justify={"space-between"}>
        <Text
          w={isMobile ? "100%" : "85%"}
          fontSize={isMobile ? "0.5rem" : "1rem"}
        >
          {freelancerProfile.description}
        </Text>
      </Stack>
    </Box>
  );
};

export default FreelancerProfileAbout;
