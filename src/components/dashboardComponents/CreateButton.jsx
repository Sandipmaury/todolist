import { Box, Button, Collapse, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { GrAdd } from "react-icons/gr";
import { createProject } from "../../redux/ProjectReducer/actions";
import { FormCreateProject } from "./FormCreateProject";

export const CreateButton = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Button onClick={onToggle} w="100%" rightIcon={<GrAdd />} variant="solid">
        New Project
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box pt="5px" rounded="md" shadow="md">
          <FormCreateProject
            isOpen={isOpen}
            onToggle={onToggle}
            projectFunction={createProject}
          />
        </Box>
      </Collapse>
    </>
  );
};
