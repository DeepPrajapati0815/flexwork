import { Box, Divider } from "@chakra-ui/react";
import React from "react";

import ClientCompanyDetails from "../../components/ClientProfileComponents/ClinetCompanyDetails";
import FreelancerProfileHeader from "../../components/FreelancerProfileComponents/FreelancerProfileHeader/FreelancerProfileHeader";
import FreelancerProfileCatalog from "../../components/FreelancerProfileComponents/FreelancerProjectCatalog/FreelancerProjectCatalog";
import ClientProjectCatalog from "../../components/ClientProfileComponents/ClientProjectCatalog";

const ClientProfilePage = () => {
  return (
    <Box
      w={"90vw"}
      p={5}
      margin={"auto"}
      my={10}
      background={"#1a202c"}
      rounded={"2xl"}
    >
      <FreelancerProfileHeader />
      <Divider color={"gray.900"} />
      <ClientCompanyDetails />
      <Divider />
      <ClientProjectCatalog />
    </Box>
  );
};

export default ClientProfilePage;
