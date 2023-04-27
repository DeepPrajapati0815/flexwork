import {
  Box,
  Flex,
  Stack,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { MdModeEdit } from "react-icons/md";
import { FlexWorkContext } from "../../context/ContextStore";
import axios from "../../utils/axiosInstance";
import ClientComapnyDetailsModal from "./ClientComapnyDetailsModal";

const ClientCompanyDetails = () => {
  const [isMobile] = useMediaQuery("(max-width: 500px)");
  const [isTab] = useMediaQuery("(max-width: 950px)");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, clientProfile, setClientProfile } = useContext(FlexWorkContext);

  const getProfileData = async () => {
    try {
      const { data } = await axios.get(`/api/v1/client/profile/${user._id}`);
      console.log(data);
      const { _id, description, companyName, isVerified, userId } = data.data;
      setClientProfile({
        ...clientProfile,
        _id,
        companyName,
        isVerified,
        description,
        userId,
      });
    } catch (error) {}
  };

  useEffect(() => {
    setClientProfile({ ...clientProfile, userId: user._id });
    getProfileData();
  }, [user]);

  return (
    <Box color={"white"} w={"95%"} p={5}>
      <Text fontSize={"0.8rem"} fontWeight={"bold"}>
        Client Company Details
      </Text>
      <Flex
        mb={4}
        direction={isTab ? "column" : "row"}
        align={"flex-start"}
        justify={"space-between"}
      >
        <Stack direction={"row"} align={"center"} justify={"center"}>
          <Text
            width={"fit-content"}
            fontWeight={"bold"}
            fontSize={isMobile ? "0.8rem" : isTab ? "1.4rem " : "1.7rem"}
          >
            {clientProfile.companyName}
          </Text>
          <MdModeEdit
            onClick={onOpen}
            style={{
              borderRadius: "50%",
              padding: "2px",
              background: "#e2e9e2",
              color: "#2e4e74",
              cursor: "pointer",
              fontSize: "1.4rem",
            }}
            color={"white"}
          ></MdModeEdit>

          <ClientComapnyDetailsModal
            clientProfile={clientProfile}
            setClientProfile={setClientProfile}
            isOpen={isOpen}
            onClose={onClose}
          ></ClientComapnyDetailsModal>
        </Stack>
      </Flex>
      <Stack direction={"row"} justify={"space-between"}>
        <Text
          w={isMobile ? "100%" : "85%"}
          fontSize={isMobile ? "0.5rem" : "1rem"}
        >
          {clientProfile.description}
        </Text>
      </Stack>
    </Box>
  );
};

export default ClientCompanyDetails;
