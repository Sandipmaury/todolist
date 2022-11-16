import { Collapse, useColorMode, useDisclosure } from "@chakra-ui/react";
import React from "react";

export const TaskCollapse = ({ status, taskArr }) => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode } = useColorMode();
  return <Collapse in={isOpen} animateOpacity></Collapse>;
};
