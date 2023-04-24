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

const PortfolioModal = ({ isOpen, onClose }) => {
  const initialRef = React.useRef(null);

  return (
    <>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={"#1a202c"} color={"white"}>
          <ModalHeader>Add Portfolio Project</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Flex direction={"column"} gap={3}>
              <FormControl>
                <FormLabel>Project Title</FormLabel>
                <Input type="text" ref={initialRef} placeholder="Title" />
              </FormControl>
              <FormControl>
                <FormLabel>Role</FormLabel>
                <Input type="text" ref={initialRef} placeholder="Role" />
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
                <FormLabel>Project Task/Challenge</FormLabel>
                <Textarea
                  type="text"
                  ref={initialRef}
                  placeholder="Describe the problem or opportunity you addressed in your project"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Project Solution</FormLabel>
                <Textarea
                  type="text"
                  ref={initialRef}
                  placeholder="Describe your solution to the problem you outlined above"
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Attach File</FormLabel>
                <Input
                  type="file"
                  style={{ cursor: "pointer" }}
                  border={"none"}
                  placeholder="Drag and drop or browse files"
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

export default PortfolioModal;
