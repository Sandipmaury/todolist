import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export const CopyRight = () => {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      h={50}
      bg={"#ff8a82"}
      color={"#484bf2"}
      direction={"row-reverse"}
      fontSize={["1xl", "1xl", "2xl", "2xl"]}
    >
      <Text textAlign={"center"} fontWeight={"medium"}>
        {" "}
        This is build by me with ❤️.
      </Text>
    </Flex>
  );
};
