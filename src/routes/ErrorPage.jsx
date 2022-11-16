import { Box } from "@chakra-ui/react";
import React from "react";

export const ErrorPage = () => {
  return (
    <Box zIndex={2} w="100%">
      <Box m="auto" w="100%" maxW="1100px" border="1px solid red" h="400px">
        ErrorPage
      </Box>
    </Box>
  );
};
