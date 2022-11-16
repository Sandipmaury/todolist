import { Box, useColorMode } from "@chakra-ui/react";
import React from "react";
import { appBox } from "./config/Backgrounds";
import { AllRoute } from "./routes/Routes";

export default function App() {
  const { colorMode } = useColorMode();

  return (
    <Box
      bg={colorMode === "dark" ? appBox.darkMode : appBox.mainBox}
      overflowY={"auto"}
      h="100vh"
      minW="350px"
      w="100%"
    >
      <AllRoute />
    </Box>
  );
}
