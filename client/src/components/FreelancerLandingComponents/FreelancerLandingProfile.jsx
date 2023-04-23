import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Badge,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const FreelancerLandingProfile = () => {
  return (
    <Center>
      <Box
        w={"100%"}
        bg={useColorModeValue("#F1F6F9")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Avatar
          size={"xl"}
          src={"https://avatars.githubusercontent.com/u/88894883?v=4"}
          alt={"Avatar Alt"}
          mb={4}
          pos={"relative"}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: "green.300",
            border: "2px solid white",
            rounded: "full",
            pos: "absolute",
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          Deep Prajapati
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          Full Stack Software Developer
        </Text>
        <Text
          textAlign={"center"}
          fontSize={"0.8rem"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          Software Developer Trainee @ Lucent Innovation | Blockchain Developer
          |Persuing IMSCIT in silver Oak university | let's grow together and
          learn something new everyday
        </Text>
        <Stack
          align={"center"}
          flexWrap={"wrap"}
          justify={"center"}
          direction={"row"}
          mt={6}
          gap={2}
        >
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.300", "gray.800")}
            fontWeight={"400"}
          >
            Web Development
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.300", "gray.800")}
            fontWeight={"400"}
          >
            photography
          </Badge>
          <Badge
            px={2}
            py={1}
            rounded={"full"}
            bg={useColorModeValue("gray.300", "gray.800")}
            fontWeight={"400"}
          >
            Blockchain Development
          </Badge>
        </Stack>

        <Stack mt={8} direction={"row"} spacing={4}>
          <Link to="/freelancer/profile" style={{ width: "100%" }}>
            <Button
              w={"100%"}
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              bg={"#2e4e74"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.700",
              }}
              _focus={{
                bg: "blue.500",
              }}
            >
              View Profile
            </Button>
          </Link>
        </Stack>
      </Box>
    </Center>
  );
};

export default FreelancerLandingProfile;
