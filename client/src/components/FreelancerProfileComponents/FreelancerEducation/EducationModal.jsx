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
import React from "react";
import axios from "../../../utils/axiosInstance";

const EducationModal = ({
  isOpen,
  onClose,
  educationDetails,
  setEducationDetails,
}) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (
        !educationDetails.universityName ||
        !educationDetails.completionDate ||
        !educationDetails.course ||
        !educationDetails.degree ||
        !educationDetails.profileId
      ) {
        console.log("invalid details");
      } else {
        const res = await axios.post(
          `/api/v1/freelancer/education/${educationDetails.profileId}`,
          educationDetails
        );
        console.log(res);
        setEducationDetails({
          universityName: "",
          completionDate: "",
          course: "",
          degree: "",
          description: "",
        });
        onClose();
      }
    } catch (error) {}
  };

  const initialRef = React.useRef(null);

  return (
    <>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <form onSubmit={handleSubmit}>
          <ModalContent bg={"#1a202c"} color={"white"}>
            <ModalHeader>Add Education</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Flex direction={"column"} gap={3} fontSize={"1rem"}>
                <FormControl>
                  <FormLabel>University</FormLabel>
                  <Input
                    type="text"
                    value={educationDetails.university}
                    onChange={(e) =>
                      setEducationDetails({
                        ...educationDetails,
                        universityName: e.target.value,
                      })
                    }
                    required
                    ref={initialRef}
                    placeholder="Ex: Gujrat University"
                  />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Completion Date</FormLabel>
                  <Input
                    type="date"
                    colorScheme="whiteAlpha"
                    value={educationDetails.completionDate}
                    onChange={(e) =>
                      setEducationDetails({
                        ...educationDetails,
                        completionDate: e.target.value,
                      })
                    }
                    required
                    focusBorderColor="white"
                    placeholder="mm/dd/yy"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Degree</FormLabel>
                  <Input
                    type="text"
                    ref={initialRef}
                    value={educationDetails.degree}
                    required
                    onChange={(e) =>
                      setEducationDetails({
                        ...educationDetails,
                        degree: e.target.value,
                      })
                    }
                    placeholder="Ex: Gujrat University"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Area Of Study</FormLabel>
                  <Input
                    type="text"
                    ref={initialRef}
                    value={educationDetails.course}
                    required
                    onChange={(e) =>
                      setEducationDetails({
                        ...educationDetails,
                        course: e.target.value,
                      })
                    }
                    placeholder="Ex: Gujrat University"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Description</FormLabel>
                  <Textarea
                    type="text"
                    value={educationDetails.description}
                    onChange={(e) =>
                      setEducationDetails({
                        ...educationDetails,
                        description: e.target.value,
                      })
                    }
                    ref={initialRef}
                    placeholder="Describe the problem or opportunity you addressed in your project"
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

export default EducationModal;
