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
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { FlexWorkContext } from "../../context/ContextStore";

const ProjectOverview = ({ project }) => {
  const [isProjectLiked, setIsProjectLiked] = useState(false);
  const { user } = useContext(FlexWorkContext);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/client/project/${project._id}`);
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
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Box>
              <Heading size="md">{project?.title}</Heading>
              <Text color={"gray.400"}>
                Published At {project?.createdAt?.split("T")[0]} On{" "}
                {project?.createdAt.split("T")[1].split(".")[0]}
              </Text>
            </Box>
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>{project?.description}</Text>
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
          >
            Apply Now
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default ProjectOverview;
