import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
} from "@chakra-ui/react";
import React, { useState } from "react";

const SkillModal = ({ isOpen, onClose, skills, setSkills }) => {
  const [skill, setSkill] = useState("");

  const initialRef = React.useRef(null);
  console.log(skills);
  return (
    <>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSkills(new Set([...skills, skill]));
            console.log(skills);
            setSkill("");
          }}
        >
          <ModalContent bg={"#1a202c"} color={"white"}>
            <ModalHeader>Edit Skills</ModalHeader>

            <ModalCloseButton />
            <ModalBody pb={6}>
              <Flex direction={"column"} gap={3}>
                <FormLabel>Skills</FormLabel>
                <Stack direction={"row"} gap={2} flexWrap={"wrap"}>
                  {Array.from(skills).map(
                    (skill, i) =>
                      skill !== "" && (
                        <Tag
                          w={"fit-content"}
                          key={i}
                          size={"md"}
                          borderRadius="full"
                          variant="solid"
                          colorScheme="whatsapp"
                        >
                          <TagLabel>{skill}</TagLabel>
                          <TagCloseButton
                            onClick={() => {
                              setSkills((prev) => {
                                const next = new Set(prev);

                                next.delete(skill);

                                return next;
                              });
                            }}
                          />
                        </Tag>
                      )
                  )}
                  <Input
                    type="text"
                    style={{
                      border: "none",
                      outline: "none",
                      marginTop: "10px",
                    }}
                    focusBorderColor="none"
                    value={skill}
                    onChange={(e) => setSkill(e.target.value)}
                    _focus={{ outline: "none" }}
                    ref={initialRef}
                    placeholder="Search skills"
                  />
                </Stack>
              </Flex>
            </ModalBody>

            <ModalFooter>
              <Button
                onClick={onClose}
                style={{ background: "#2e4e74" }}
                mr={3}
              >
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

export default SkillModal;
