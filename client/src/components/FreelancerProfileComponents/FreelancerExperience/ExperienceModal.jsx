import {
  Modal,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import axios from "../../../utils/axiosInstance";

const ExperienceModal = ({
  freelancerExperienceDetails,
  setFreelancerExperienceDetails,
  isOpen,
  onClose,
}) => {
  const initialRef = React.useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sd = Number(
      new Date(freelancerExperienceDetails.startDate).getTime()
    );
    const ed = Number(new Date(freelancerExperienceDetails.endDate).getTime());

    if (
      !freelancerExperienceDetails.companyName ||
      !freelancerExperienceDetails.role ||
      !freelancerExperienceDetails.description ||
      !freelancerExperienceDetails.profileId ||
      !freelancerExperienceDetails.startDate ||
      !freelancerExperienceDetails.endDate ||
      !freelancerExperienceDetails.location
    ) {
      console.log("Missing fields");
    } else {
      if (sd < ed) {
        try {
          const res = await axios.post(
            `/api/v1/freelancer/experience/${freelancerExperienceDetails.profileId}`,
            freelancerExperienceDetails
          );

          setFreelancerExperienceDetails({
            companyName: "",
            role: "",
            description: "",
            startDate: "",
            endDate: "",
            location: "",
          });
          onClose();
        } catch (error) {}
      } else {
        console.log("start date must be less than end date");
      }
    }
  };

  return (
    <>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <form onSubmit={handleSubmit}>
          <ModalContent bg={"#1a202c"} color={"white"}>
            <ModalHeader>Add Employment </ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Flex direction={"column"} gap={3}>
                <FormControl>
                  <FormLabel>Company </FormLabel>
                  <Input
                    type="text"
                    ref={initialRef}
                    onChange={(e) =>
                      setFreelancerExperienceDetails({
                        ...freelancerExperienceDetails,
                        companyName: e.target.value,
                      })
                    }
                    required
                    value={freelancerExperienceDetails.companyName}
                    placeholder="Ex: Flexwork"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Role</FormLabel>
                  <Input
                    type="text"
                    onChange={(e) =>
                      setFreelancerExperienceDetails({
                        ...freelancerExperienceDetails,
                        role: e.target.value,
                      })
                    }
                    value={freelancerExperienceDetails.role}
                    ref={initialRef}
                    required
                    placeholder="Ex: Senior Software Engineer"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Location</FormLabel>
                  <Input
                    type="text"
                    onChange={(e) =>
                      setFreelancerExperienceDetails({
                        ...freelancerExperienceDetails,
                        location: e.target.value,
                      })
                    }
                    required
                    value={freelancerExperienceDetails.location}
                    ref={initialRef}
                    placeholder="City"
                  />
                </FormControl>

                <Flex direction={"row"} gap={2}>
                  <FormControl mt={4}>
                    <FormLabel>Starting Date</FormLabel>
                    <Input
                      type="date"
                      onChange={(e) =>
                        setFreelancerExperienceDetails({
                          ...freelancerExperienceDetails,
                          startDate: e.target.value,
                        })
                      }
                      required
                      value={freelancerExperienceDetails.startDate}
                      colorScheme="whiteAlpha"
                      focusBorderColor="white"
                      placeholder="mm/dd/yy"
                    />
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Ending Date</FormLabel>
                    <Input
                      type="date"
                      colorScheme="whiteAlpha"
                      focusBorderColor="white"
                      onChange={(e) =>
                        setFreelancerExperienceDetails({
                          ...freelancerExperienceDetails,
                          endDate: e.target.value,
                        })
                      }
                      required
                      value={freelancerExperienceDetails.endDate}
                      placeholder="mm/dd/yy"
                    />
                  </FormControl>
                </Flex>

                <FormControl>
                  <FormLabel>Description</FormLabel>
                  <Textarea
                    type="text"
                    onChange={(e) =>
                      setFreelancerExperienceDetails({
                        ...freelancerExperienceDetails,
                        description: e.target.value,
                      })
                    }
                    required
                    value={freelancerExperienceDetails.description}
                    ref={initialRef}
                    placeholder="Describe your experience in company"
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

export default ExperienceModal;
