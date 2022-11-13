import { Box } from "@chakra-ui/react";
import React from "react";
import { Navbar } from "./components/navbarComponents/Navbar";
import { AllRoute } from "./routes/Routes";

export default function App() {
  return (
    <Box bg="#ffffff" minW="350px" w="100%" border="1px solid red">
      <Box>
        <Navbar />
        <AllRoute />
      </Box>
    </Box>
  );
}
