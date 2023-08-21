import { SearchIcon } from "@chakra-ui/icons";
import { Flex, IconButton, Input } from "@chakra-ui/react";
import React from "react";

const SearchBar = () => {
  return (
    <Flex mb={10} rounded={"base"} border={"1px solid white"} outline={"none"}>
      <Input
        border={"none"}
        color={"white"}
        focusBorderColor={"white"}
        placeholder="Search for Jobs..."
      />
      <IconButton
        aria-label="Search database"
        rounded={"none"}
        icon={<SearchIcon />}
      />
    </Flex>
  );
};

export default SearchBar;
