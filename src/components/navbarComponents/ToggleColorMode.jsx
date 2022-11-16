import { Button, useColorMode } from "@chakra-ui/react";
import React from "react";
import { MdLightMode, MdNightlight } from "react-icons/md";

export const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode}>
      {colorMode === "dark" ? <MdNightlight /> : <MdLightMode />}
    </Button>
  );
};
