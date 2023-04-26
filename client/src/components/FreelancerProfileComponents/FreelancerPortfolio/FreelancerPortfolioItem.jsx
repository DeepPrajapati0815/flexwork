import {
  AddIcon,
  DeleteIcon,
  DownloadIcon,
  EditIcon,
  MinusIcon,
} from "@chakra-ui/icons";
import {
  Card,
  CardBody,
  Stack,
  Text,
  Button,
  Box,
  AccordionItem,
  Accordion,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
  Flex,
} from "@chakra-ui/react";
import axios from "../../../utils/axiosInstance";
import { useState } from "react";

const FreelancerPortfolioItem = ({
  portfolio,
  deletePortfolio,
  onOpen,
  setIsUpdate,
  setUpdatePortfolio,
}) => {
  const [downloadFlag, setDownloadFlag] = useState(false);
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      bg="rgb(26,32,44)"
      color="white"
      border={"1px solid rgb(145,151,159)"}
      mb={"5"}
    >
      <Stack width={"100vw"}>
        <CardBody>
          <Flex justifyContent={"space-between"}>
            <Box>
              <Text fontWeight={"bolder"} fontSize={"1.4rem"}>
                {portfolio.title}
              </Text>

              <Text color={"gray.400"} fontSize="0.9rem">
                {portfolio.role}
              </Text>

              <Text py={"2"} color={"gray.400"} fontSize="0.9rem">
                Completion Date{" : "}
                <span>{portfolio.completionDate.split("T0")[0]}</span>{" "}
              </Text>
            </Box>
            <Flex direction={"row"} gap={"2"} pt={"2"}>
              <Box title="download">
                <DownloadIcon
                  onClick={() => setDownloadFlag(false)}
                  bg={"blue.500"}
                  _hover={{ bg: "blue.400" }}
                  rounded={"full"}
                  color={"white"}
                  cursor={"pointer"}
                  fontSize="2rem"
                  p={"5px"}
                ></DownloadIcon>
              </Box>
              <EditIcon
                bg={"green.500"}
                _hover={{ bg: "green.400" }}
                rounded={"full"}
                color={"white"}
                cursor={"pointer"}
                fontSize="2rem"
                p={"5px"}
                onClick={() => {
                  setIsUpdate(true);
                  setUpdatePortfolio(portfolio);
                  onOpen();
                }}
              />
              <DeleteIcon
                bg={"red.500"}
                _hover={{ bg: "red.400" }}
                rounded={"full"}
                color={"white"}
                cursor={"pointer"}
                fontSize="2rem"
                p={"5px"}
                onClick={() => deletePortfolio(portfolio._id)}
              ></DeleteIcon>
              {/* <Text pt={1} fontSize={"0.7rem"}>
                Download
              </Text> */}
            </Flex>
          </Flex>

          <Box py={"3"} color={"white"}>
            <Text fontWeight={"bolder"} fontSize={"1.1rem"} py={"3"}>
              Project Challenge
            </Text>
            <Accordion allowToggle>
              <AccordionItem border={"none"} outline={"none"}>
                <h2>
                  <AccordionButton
                    _hover={{ background: "rgb(74,85,104)" }}
                    bg={"gray.600"}
                    color="white"
                  >
                    <Box as="span" flex="1" textAlign="left">
                      {portfolio.projectChallange}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel>
                  <Text color={"gray.400"} fontSize="0.9rem" py={"2"}>
                    Solution :
                  </Text>
                  {portfolio.projectSolution}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default FreelancerPortfolioItem;
