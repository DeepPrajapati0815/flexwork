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
import React, { useState } from "react";
import { MdWorkOutline } from "react-icons/md";
import PortfolioModal from "./PortfolioModal";
import { useContext } from "react";
import { FlexWorkContext } from "../../../context/ContextStore";
import { useEffect } from "react";

import axios from "../../../utils/axiosInstance";

const FreelancerPortfolioSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { freelancerProfile } = useContext(FlexWorkContext);

  const [freelancerPortfolios, setFreelancerPortfolios] = useState([]);

  const [isMobile] = useMediaQuery("(max-width: 500px)");
  const [isTab] = useMediaQuery("(max-width: 950px)");

  const getPortfolios = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/freelancer/portfolio/${freelancerProfile?._id}`
      );

      setFreelancerPortfolios(data.data);
    } catch (error) {}
  };

  useEffect(() => {
    if (freelancerProfile._id != "") {
      getPortfolios();
    }
  }, [freelancerProfile._id]);

  return (
    <Box color={"white"} w={"95%"} p={5}>
      <Flex mb={10} align={"center"} gap={2} justify={"space-between"}>
        <Stack direction={"row"} justify={"center"} align={"center"}>
          <Heading size={isMobile ? "sm" : "md"}>Portfolio</Heading>

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
          <PortfolioModal
            freelancerProfile={freelancerProfile}
            isOpen={isOpen}
            onClose={onClose}
          ></PortfolioModal>
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
          onClick={onOpen}
        >
          Add a Portfolio
        </Text>
      </Stack>
    </Box>
  );
};

export default FreelancerPortfolioSection;
