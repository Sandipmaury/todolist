import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const ErrorPage = () => {
  document.title = "404 | Page Not Found";
  const navigate = useNavigate();
  return (
    <Box zIndex={2} w="100%">
      <Flex
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        m="auto"
        w="100%"
        maxW="1100px"
        h="400px"
        gap={5}
      >
        <Text
          fontWeight={"bold"}
          textAlign={"center"}
          fontSize={["1xl", "2xl", "2xl", "3xl"]}
        >
          404 | Page Not Found
        </Text>
        <Text textAlign={"center"} fontSize={["1xl", "1xl", "2xl", "2xl"]}>
          You just hit a route that doesn't exist... the sadness.😢
        </Text>
        <Button onClick={() => navigate("/")} leftIcon={<FaHome />}>
          {" "}
          Back to Home{" "}
        </Button>
      </Flex>
    </Box>
  );
};
