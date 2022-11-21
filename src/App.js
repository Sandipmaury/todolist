import { Box, useColorMode } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { appBox } from "./config/Backgrounds";
import { AllRoute } from "./routes/Routes";

export default function App() {
  const { colorMode } = useColorMode();
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);

  return (
    <Box
      bg={
        isAuth
          ? colorMode === "dark"
            ? appBox.darkMode
            : appBox.mainBox
          : "#ffffff"
      }
      overflowY={"auto"}
      h="100vh"
      minW="350px"
      w="100%"
    >
      <AllRoute />
    </Box>
  );
}
