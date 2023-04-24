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

const ExperienceModal = ({ isOpen, onClose }) => {
  const initialRef = React.useRef(null);

  return (
    <>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={"#1a202c"} color={"white"}>
          <ModalHeader>Add Employment or Experience</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Flex direction={"column"} gap={3}>
              <FormControl>
                <FormLabel>Company </FormLabel>
                <Input
                  type="text"
                  ref={initialRef}
                  placeholder="Ex: Flexwork"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input
                  type="text"
                  ref={initialRef}
                  placeholder="Ex: Senior Software Engineer"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Location</FormLabel>
                <Input type="text" ref={initialRef} placeholder="City" />
              </FormControl>

              <Flex direction={"row"} gap={2}>
                <FormControl mt={4}>
                  <FormLabel>Starting Date</FormLabel>
                  <Input
                    type="date"
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
                    placeholder="mm/dd/yy"
                  />
                </FormControl>
              </Flex>

              <FormControl>
                <FormLabel>Description</FormLabel>
                <Textarea
                  type="text"
                  ref={initialRef}
                  placeholder="Describe your experience in company"
                />
              </FormControl>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button style={{ background: "#2e4e74" }} mr={3}>
              Save
            </Button>
            <Button colorScheme="red" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ExperienceModal;
