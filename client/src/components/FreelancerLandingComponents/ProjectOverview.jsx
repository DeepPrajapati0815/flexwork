import { ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  HStack,
  Heading,
  Icon,
  Tag,
  TagLabel,
  Text,
  Textarea,
  Stack,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { FlexWorkContext } from "../../context/ContextStore";
import axios from "../../utils/axiosInstance";

const ProjectOverview = ({ project, location }) => {
  const [isProjectLiked, setIsProjectLiked] = useState(false);
  const { user, setRefresh } = useContext(FlexWorkContext);
  console.log("project==>", project);
  let statusColor = "red";
  if (project?.status == "Accepted") {
    statusColor = "green";
  } else if (project?.status == "Pending") {
    statusColor = "yellow";
  }
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/client/project/${project._id}`);
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
  const deleteHandler = async () => {
    try {
      const res = await axios.post(
        `/api/v1/client/proposal/${project.proposalID}`
      );
      setRefresh(Math.random() * 6000000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Card
      bg={"#1a202c"}
      color={"white"}
      borderBottom={"1px solid gray"}
      borderRadius={0}
    >
      <CardHeader>
        <Flex spacing="4">
          <Flex
            flex="1"
            gap="4"
            justifyContent={"space-between"}
            alignItems="center"
            flexWrap="wrap"
          >
            <Flex width={"100%"} justifyContent={"space-between"}>
              <Box>
                <Link to={`/client/project/${project._id}`}>
                  <Heading size="md">{project?.title}</Heading>
                </Link>
                <Text color={"gray.400"}>
                  Published At {project?.createdAt?.split("T")[0]} On{" "}
                  {project?.createdAt.split("T")[1].split(".")[0]}
                </Text>
              </Box>
              {project?.status ? (
                <Box
                  letterSpacing={"1px"}
                  fontWeight={"bolder"}
                  color={statusColor}
                >
                  {project?.status}
                </Box>
              ) : (
                <Box>
                  {user.isClient ? (
                    <Link to={`/client/project/${project._id}`}>
                      <Button colorScheme="teal" size={"sm"} mx={3}>
                        view
                      </Button>
                    </Link>
                  ) : null}

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
              )}
            </Flex>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>{project?.description.slice(0, 300)}.... </Text>
      </CardBody>

      <Flex marginLeft={5} gap={3} flexWrap={"wrap"}>
        Skills required :
        {project?.skills?.map((skill, index) => {
          return (
            <HStack key={index} spacing={4}>
              {["md"].map((size) => (
                <Tag
                  size={size}
                  key={size}
                  borderRadius="full"
                  variant="solid"
                  colorScheme="whiteAlpha"
                  bg={"gray.600"}
                  color={"white"}
                  fontWeight={"bolder"}
                >
                  <TagLabel>{skill}</TagLabel>
                </Tag>
              ))}
            </HStack>
          );
        })}
      </Flex>
      <Text marginLeft={5} mb={3} marginTop={3} color={"gray.400"}>
        {user.isClient ? "Proposals Received " : "Total Proposals"} :{" "}
        {project?.totalProposals}
      </Text>

      {!user.isClient && (
        <CardFooter
          justify="space-between"
          flexWrap="wrap"
          w={"100%"}
          sx={{
            "& > button": {
              minW: "136px",
            },
          }}
        >
          {project?.status === "Rejected" ? (
            <Button
              flex="2"
              display={"flex"}
              justifyContent={"center"}
              gap={2}
              alignItems={"center"}
              variant="unstyled"
              bg={"red.600"}
              _hover={{ background: "red.500" }}
              onClick={() => deleteHandler()}
            >
              Delete
            </Button>
          ) : (
            <>
              <Button
                flex="2"
                display={"flex"}
                justifyContent={"center"}
                gap={2}
                alignItems={"center"}
                variant="unstyled"
                colorScheme="pink"
                onClick={(e) => setIsProjectLiked(!isProjectLiked)}
              >
                {isProjectLiked ? (
                  <AiFillHeart color="#E90064" />
                ) : (
                  <AiFillHeart color="white" />
                )}{" "}
                Like
              </Button>
              <Button
                flex="1"
                style={{ background: "#394867" }}
                onMouseOver={(e) => {
                  e.target.style.background = "#212A3E";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "#394867";
                }}
                colorScheme="blue"
                onClick={handleClick}
                isDisabled={location == "applied" ? true : false}
              >
                {location == "applied" ? "Applied" : "Apply Now"}
              </Button>
            </>
          )}
        </CardFooter>
      )}
    </Card>
  );
};

export default ProjectOverview;