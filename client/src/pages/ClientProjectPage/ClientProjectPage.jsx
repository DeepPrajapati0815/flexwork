import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { BiCheckCircle } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import ProjectProposalModal from "../../components/ProjectProposal/ProjectProposalModal";
import ProposalOverview from "../../components/ProjectProposal/ProposalOverview";
import { FlexWorkContext } from "../../context/ContextStore";
import axios from "../../utils/axiosInstance";

const ClientProjectPage = () => {
  const { id: projectId } = useParams();
  const [project, setProject] = useState({});

  const [recievedProposals, setRecivedProposals] = useState([]);
  const [freelacersData, setFreelancersData] = useState([]);

  const [isApplied, setIsApplied] = useState(false);

  const { user, refresh, setRefresh } = useContext(FlexWorkContext);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const getParticularProject = async () => {
    try {
      const { data } = await axios.get(`/api/v1/client/project/${projectId}`);
      setProject(data.data);
      setIsApplied(data?.isApplied);
    } catch (error) {
      console.log(error);
    }
  };

  const getLatestFiveProposal = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/client/proposal?limit=true&id=${projectId}`
      );
      setRecivedProposals(data?.data?.clientAllProposals);
      setFreelancersData(data?.data?.freelancers);
    } catch (error) {}
  };

  const publishProject = async () => {
    try {
      const res = await axios.put(`/api/v1/client/project/${project._id}`, {
        isPublished: true,
      });
      console.log(res);
      setRefresh(Math.random() * 6000000);
    } catch (error) {
      console.log(error);
    }
  };
  const unpublishProject = async () => {
    try {
      const res = await axios.put(`/api/v1/client/project/${project._id}`, {
        isPublished: false,
      });
      console.log(res);
      setRefresh(Math.random() * 6000000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getParticularProject();
    getLatestFiveProposal();
  }, [refresh]);

  console.log("freelacersData", freelacersData);

  return (
    <Container maxW={"10xl"} w={"90vw"} my={10}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 6 }}
        style={{
          display: "flex",
          justifyContent: "center",
          border: "1px solid gray",
          borderRadius: "15px",
          background: "rgb(26,32,44)",
        }}
        color={"white"}
        px={10}
      >
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box display={"flex"} my={"0"} justifyContent={"flex-end"}>
            {user.isClient && !project?.isPublished ? (
              <Button
                onClick={() => {
                  publishProject();
                }}
                colorScheme="facebook"
                size={"sm"}
                minW="100px"
              >
                publish
              </Button>
            ) : (
              user.isClient &&
              project?.isPublished && (
                <Button
                  onClick={() => {
                    unpublishProject();
                  }}
                  bg={"red.500"}
                  size={"sm"}
                  minW="100px"
                  _hover={{ background: "red.400" }}
                >
                  unpublish
                </Button>
              )
            )}
          </Box>
          <Box
            as={"header"}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "4xl" }}
              >
                {project.title}
              </Heading>
              <Text
                color={useColorModeValue("gray.400", "gray.400")}
                fontWeight={300}
                fontSize={"1xl"}
                textAlign={"right"}
                py={2}
              >
                Published At {project?.createdAt?.split("T")[0]} On{" "}
                {project?.createdAt?.split("T")[1].split(".")[0]}
              </Text>
            </Box>
            <Text fontWeight={"bolder"} fontSize={"2xl"} mr={3}>
              ₹ {project?.projectRate}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text w={"100%"} fontSize={"lg"}>
                {project.description}
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("rgb(46,78,116)")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Skills required
              </Text>

              <SimpleGrid columns={{ base: 1, md: 12 }} spacing={2}>
                {project?.skills?.map((skill, index) => {
                  return (
                    <List style={{ marginLeft: "10px" }} key={index}>
                      <ListItem>
                        <Badge py={1} px={2}>
                          {skill}
                        </Badge>
                      </ListItem>
                    </List>
                  );
                })}
              </SimpleGrid>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }}>
              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("rgb(46,78,116)")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  my={"4"}
                >
                  Category
                </Text>

                <Text
                  style={{ fontWeight: "700", marginLeft: "10px" }}
                  textTransform={"capitalize"}
                >
                  {project?.category}
                </Text>
              </Box>

              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("rgb(46,78,116)")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  my={"4"}
                >
                  Duration
                </Text>

                <Text
                  style={{ fontWeight: "700", marginLeft: "10px" }}
                  textTransform={"capitalize"}
                >
                  {project?.duration}
                </Text>
              </Box>

              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("rgb(46,78,116)")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  my={"4"}
                >
                  Experience Type
                </Text>

                <Text
                  style={{ fontWeight: "700", marginLeft: "10px" }}
                  textTransform={"capitalize"}
                >
                  {project?.experienceType}
                </Text>
              </Box>

              <Box>
                <Text
                  fontSize={{ base: "16px", lg: "18px" }}
                  color={useColorModeValue("rgb(46,78,116)")}
                  fontWeight={"500"}
                  textTransform={"uppercase"}
                  my={"4"}
                >
                  Proposals
                </Text>

                <Text
                  style={{ fontWeight: "700", marginLeft: "10px" }}
                  textTransform={"capitalize"}
                >
                  {project?.totalProposals}
                </Text>
              </Box>
            </SimpleGrid>
          </Stack>
          {!user.isClient ? (
            <Flex gap={4}>
              <Button
                rounded={"none"}
                w={"full"}
                mt={8}
                size={"lg"}
                py={"7"}
                color={"white"}
                textTransform={"uppercase"}
                variant="outline"
                _hover={{
                  boxShadow: "lg",
                  backgroundColor: "teal",
                }}
              >
                Add to wishlist
              </Button>
              <Button
                rounded={"none"}
                w={"full"}
                mt={8}
                size={"lg"}
                py={"7"}
                bg={"rgb(46,78,116)"}
                color={("white", "gray.900")}
                textTransform={"uppercase"}
                _hover={{
                  boxShadow: "lg",
                  backgroundColor: "teal",
                }}
                isDisabled={isApplied}
                onClick={() => {
                  onOpen();
                }}
              >
                {isApplied ? (
                  <>
                    <BiCheckCircle fontSize={"1.3rem"}></BiCheckCircle>
                    &nbsp;
                    <p>Applied</p>
                  </>
                ) : (
                  "Apply Now"
                )}
              </Button>
              <ProjectProposalModal
                setIsApplied={setIsApplied}
                freelancerId={user._id}
                project={project}
                isOpen={isOpen}
                setRefresh={setRefresh}
                onClose={onClose}
              ></ProjectProposalModal>
            </Flex>
          ) : (
            <Box>
              <Flex
                flexDirection={"row-reverse"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Link to={`/client/project/proposals/${project._id}`}>
                  <Button colorScheme="facebook">view al</Button>
                </Link>
                <Heading
                  color={"white"}
                  size={"md"}
                  textAlign={"center"}
                  my={6}
                >
                  Received Proposals
                </Heading>
              </Flex>
              {freelacersData?.map((freelancer, index) => {
                return (
                  <ProposalOverview
                    key={index}
                    freelancer={freelacersData[index]}
                    proposal={recievedProposals[index]}
                  />
                );
              })}
            </Box>
          )}
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default ClientProjectPage;