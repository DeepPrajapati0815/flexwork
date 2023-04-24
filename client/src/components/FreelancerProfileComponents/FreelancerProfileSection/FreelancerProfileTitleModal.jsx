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
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

const FreelancerProfileTitleModal = ({ isOpen, onClose }) => {
  const initialRef = React.useRef(null);
  return (
    <>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={"#1a202c"} color={"white"}>
          <ModalHeader>Edit your title</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Flex direction={"column"} gap={3} fontSize={"1rem"}>
              <FormControl>
                <FormLabel>Your title</FormLabel>
                <Text fontSize="0.8rem" color={"gray.400"} mb={5}>
                  Your title Enter a single sentence description of your
                  professional skills/experience (e.g. Expert Web Designer with
                  Ajax experience)
                </Text>
                <Input
                  type="text"
                  ref={initialRef}
                  placeholder="Ex: Expert Web Designer with
                  Ajax experience"
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

export default FreelancerProfileTitleModal;
