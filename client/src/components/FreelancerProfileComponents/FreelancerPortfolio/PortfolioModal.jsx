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

const PortfolioModal = ({
  refresh,
  setRefresh,
  freelancerProfile,
  isOpen,
  onClose,
  isUpdate,
  updatePortfolio,
  setUpdatePortfolio,
}) => {
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
  }, [freelancerProfile, refresh]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isUpdate && updatePortfolio._id) {
        const res = await axios.put(
          `/api/v1/freelancer/portfolio/${updatePortfolio._id}`,
          updatePortfolio
        );
        setUpdatePortfolio({});
        setRefresh(Math.random() * 6000000);
        onClose();
      } else {
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
          setFreelancerPortfolio({
            title: "",
            role: "",
            projectChallange: "",
            projectSolution: "",
            file: "",
            completionDate: "",
          });
          setRefresh(Math.random() * 6000000);
          onClose();
        }
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
                    value={
                      updatePortfolio
                        ? updatePortfolio.title
                        : freelancerPortfolio.title
                    }
                    onChange={(e) =>
                      updatePortfolio
                        ? setUpdatePortfolio({
                            ...updatePortfolio,
                            title: e.target.value,
                          })
                        : setFreelancerPortfolio({
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
                    value={
                      updatePortfolio
                        ? updatePortfolio.role
                        : freelancerPortfolio.role
                    }
                    onChange={(e) =>
                      updatePortfolio
                        ? setUpdatePortfolio({
                            ...updatePortfolio,
                            role: e.target.value,
                          })
                        : setFreelancerPortfolio({
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
                    value={
                      updatePortfolio
                        ? updatePortfolio.completionDate?.split("T0")[0]
                        : freelancerPortfolio.completionDate
                    }
                    onChange={(e) =>
                      updatePortfolio
                        ? setUpdatePortfolio({
                            ...updatePortfolio,
                            completionDate: e.target.value,
                          })
                        : setFreelancerPortfolio({
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
                  <Input
                    type="text"
                    ref={initialRef}
                    value={
                      updatePortfolio
                        ? updatePortfolio.projectChallange
                        : freelancerPortfolio.projectChallange
                    }
                    required
                    onChange={(e) =>
                      updatePortfolio
                        ? setUpdatePortfolio({
                            ...updatePortfolio,
                            projectChallange: e.target.value,
                          })
                        : setFreelancerPortfolio({
                            ...freelancerPortfolio,
                            projectChallange: e.target.value,
                          })
                    }
                    placeholder={"Describe Project Challenge"}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Project Solution</FormLabel>
                  <Textarea
                    type="text"
                    value={
                      updatePortfolio
                        ? updatePortfolio.projectSolution
                        : freelancerPortfolio.projectSolution
                    }
                    required
                    onChange={(e) =>
                      updatePortfolio
                        ? setUpdatePortfolio({
                            ...updatePortfolio,
                            projectSolution: e.target.value,
                          })
                        : setFreelancerPortfolio({
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
                    value={updatePortfolio ? "" : freelancerPortfolio.file}
                    onChange={(e) =>
                      updatePortfolio
                        ? setUpdatePortfolio({
                            ...updatePortfolio,
                            file: e.target.value,
                          })
                        : setFreelancerPortfolio({
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
                {isUpdate ? "update" : "save"}
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
