import {
  Box,
  Button,
  Collapse,
  Tooltip,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { MdAdd } from "react-icons/md";
import { FormCreateProject } from "./FormCreateProject";

export const CreateProject = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode } = useColorMode();
  return (
    <>
      <Tooltip placement="top" hasArrow label="Create Project" size={"md"}>
        <Button
          onClick={onToggle}
          w="100%"
          color={colorMode === "dark" ? "#ffffff" : "black"}
          rightIcon={<MdAdd />}
          variant="solid"
        >
          New Project
        </Button>
      </Tooltip>
      <Collapse in={isOpen} animateOpacity>
        <Box pt="5px" rounded="md" shadow="md">
          <FormCreateProject isOpen={isOpen} onToggle={onToggle} />
        </Box>
      </Collapse>
    </>
  );
};
