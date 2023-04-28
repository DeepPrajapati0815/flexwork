import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  Badge,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { useParams } from "react-router-dom";
import axios from "../../utils/axiosInstance";

export default function Simple() {
  const { id: projectId } = useParams();
  const [project, setProject] = useState({});

  console.log(projectId);

  const getParticularProject = async () => {
    try {
      const { data } = await axios.get(`/api/v1/client/project/${projectId}`);
      setProject(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getParticularProject();
  }, []);

  return (
    <Container maxW={"10xl"} w={"8xl"} my={10}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
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

          <Flex gap={4}>
            <Button
              rounded={"none"}
              w={"full"}
              mt={8}
              size={"lg"}
              py={"7"}
              color={useColorModeValue("white", "gray.900")}
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
              bg={useColorModeValue("rgb(46,78,116)", "gray.50")}
              color={useColorModeValue("white", "gray.900")}
              textTransform={"uppercase"}
              _hover={{
                boxShadow: "lg",
                backgroundColor: "teal",
              }}
            >
              Send Proposal
            </Button>
          </Flex>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
