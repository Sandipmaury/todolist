import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FeedbackForm } from "./FeedbackForm";

export const Footer = () => {
  return (
    <Flex
      justifyContent={"space-evenly"}
      alignItems={"center"}
      direction={["column", "column", "row", "row"]}
      p={10}
      gap={10}
    >
      <Image
        w={["80%", "60%", "60%", "50%"]}
        src="https://img.freepik.com/free-vector/tiny-business-people-manager-tasks-goals-accomplishment-chart-task-management-project-managers-tool-task-management-software-concept_335657-2432.jpg?w=1060&t=st=1668717834~exp=1668718434~hmac=d878b7d5e35d62c4b063433a5545371f42e4ceb11810f929d58a1a6fb5a5431c"
        alt="footer image"
      />
      <Box>
        <Text
          color={"#484bf2"}
          fontWeight={"medium"}
          fontSize={["1xl", "1xl", "2xl", "2xl"]}
        >
          Want to give feedback.
        </Text>
        <FeedbackForm />
      </Box>
    </Flex>
  );
};
