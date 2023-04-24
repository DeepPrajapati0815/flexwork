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

const EducationModal = ({ isOpen, onClose }) => {
  const initialRef = React.useRef(null);
  return (
    <>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={"#1a202c"} color={"white"}>
          <ModalHeader>Add Education</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Flex direction={"column"} gap={3} fontSize={"1rem"}>
              <FormControl>
                <FormLabel>University</FormLabel>
                <Input
                  type="text"
                  ref={initialRef}
                  placeholder="Ex: Gujrat University"
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Completion Date</FormLabel>
                <Input
                  type="date"
                  colorScheme="whiteAlpha"
                  focusBorderColor="white"
                  placeholder="mm/dd/yy"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Degree</FormLabel>
                <Input
                  type="text"
                  ref={initialRef}
                  placeholder="Ex: Gujrat University"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Area Of Study</FormLabel>
                <Input
                  type="text"
                  ref={initialRef}
                  placeholder="Ex: Gujrat University"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Textarea
                  type="text"
                  ref={initialRef}
                  placeholder="Describe the problem or opportunity you addressed in your project"
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

export default EducationModal;
