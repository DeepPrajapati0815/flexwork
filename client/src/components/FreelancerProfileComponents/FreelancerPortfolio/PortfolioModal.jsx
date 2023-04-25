import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import axios from "../../../utils/axiosInstance";

const PortfolioModal = ({ freelancerProfile, isOpen, onClose }) => {
  const initialRef = React.useRef(null);

  const [freelancerPortfolio, setFreelancerPortfolio] = useState({
    title: "",
    role: "",
    projectChallange: "",
    projectSolution: "",
    file: "",
    completionDate: "",
    profileId: "",
  });

  useEffect(() => {
    if (freelancerProfile._id !== "") {
      setFreelancerPortfolio({
        ...freelancerPortfolio,
        profileId: freelancerProfile._id,
      });
    }
  }, [freelancerProfile]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        freelancerPortfolio.profileId !== "" &&
        freelancerPortfolio.title !== "" &&
        freelancerPortfolio.role !== "" &&
        freelancerPortfolio.completionDate !== "" &&
        freelancerPortfolio.file !== "" &&
        freelancerPortfolio.projectChallange !== "" &&
        freelancerPortfolio.projectSolution
      ) {
        const res = await axios.post(
          `/api/v1/freelancer/portfolio/${freelancerPortfolio.profileId}`,
          freelancerPortfolio
        );
        console.log();
      }
    } catch (error) {}
  };

  return (
    <>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <form onSubmit={handleSubmit} enctype="multipart/form-data">
          <ModalContent bg={"#1a202c"} color={"white"}>
            <ModalHeader>Add Portfolio Project</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Flex direction={"column"} gap={3}>
                <FormControl>
                  <FormLabel>Project Title</FormLabel>
                  <Input
                    type="text"
                    value={freelancerPortfolio.title}
                    onChange={(e) =>
                      setFreelancerPortfolio({
                        ...freelancerPortfolio,
                        title: e.target.value,
                      })
                    }
                    required
                    ref={initialRef}
                    placeholder="Title"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Role</FormLabel>
                  <Input
                    type="text"
                    value={freelancerPortfolio.role}
                    onChange={(e) =>
                      setFreelancerPortfolio({
                        ...freelancerPortfolio,
                        role: e.target.value,
                      })
                    }
                    required
                    ref={initialRef}
                    placeholder="Role"
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Completion Date</FormLabel>
                  <Input
                    type="date"
                    value={freelancerPortfolio.completionDate}
                    onChange={(e) =>
                      setFreelancerPortfolio({
                        ...freelancerPortfolio,
                        completionDate: e.target.value,
                      })
                    }
                    required
                    colorScheme="whiteAlpha"
                    focusBorderColor="white"
                    placeholder="mm/dd/yy"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Project Task/Challenge</FormLabel>
                  <Textarea
                    type="text"
                    ref={initialRef}
                    value={freelancerPortfolio.projectChallange}
                    required
                    onChange={(e) =>
                      setFreelancerPortfolio({
                        ...freelancerPortfolio,
                        projectChallange: e.target.value,
                      })
                    }
                    placeholder="Describe the problem or opportunity you addressed in your project"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Project Solution</FormLabel>
                  <Textarea
                    type="text"
                    value={freelancerPortfolio.projectSolution}
                    required
                    onChange={(e) =>
                      setFreelancerPortfolio({
                        ...freelancerPortfolio,
                        projectSolution: e.target.value,
                      })
                    }
                    ref={initialRef}
                    placeholder="Describe your solution to the problem you outlined above"
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Attach File</FormLabel>
                  <Input
                    type="file"
                    value={freelancerPortfolio.file}
                    required
                    onChange={(e) =>
                      setFreelancerPortfolio({
                        ...freelancerPortfolio,
                        file: e.target.value,
                      })
                    }
                    style={{ cursor: "pointer" }}
                    border={"none"}
                    placeholder="Drag and drop or browse files"
                  />
                </FormControl>
              </Flex>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" style={{ background: "#2e4e74" }} mr={3}>
                Save
              </Button>
              <Button colorScheme="red" onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
};

export default PortfolioModal;
