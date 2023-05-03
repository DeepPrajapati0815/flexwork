import { Container, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProposalOverview from "../../components/ProjectProposal/ProposalOverview";
import axios from "../../utils/axiosInstance";

const ClientAllProposalsPage = () => {
  const { id: projectId } = useParams();

  const [allProposals, setAllProposals] = useState([]);
  const [freelacersData, setFreelancersData] = useState([]);

  const getAllProposalOfProject = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/client/proposal?id=${projectId}`
      );
      setAllProposals(data?.data?.clientAllProposals);
      setFreelancersData(data?.data?.freelancers);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProposalOfProject();
  }, []);
  return (
    <Container maxW={"10xl"} w={"90vw"} my={10}>
      <SimpleGrid
        // columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 6 }}
        style={{
          border: "1px solid gray",
          borderRadius: "15px",
          background: "rgb(26,32,44)",
        }}
        color={"white"}
        px={10}
      >
        <Stack display="flex" flexDirection={"column"}>
          {freelacersData?.map((freelancer, index) => {
            return (
              <ProposalOverview
                key={index}
                freelancer={freelacersData[index]}
                proposal={allProposals[index]}
              />
            );
          })}
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default ClientAllProposalsPage;
