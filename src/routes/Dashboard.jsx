import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { CreateProject } from "../components/dashboardComponents/CreateProject";
import { ProjectHeader } from "../components/dashboardComponents/ProjectHeader";
import { Projects } from "../components/dashboardComponents/Projects";
import { Tasks } from "../components/dashboardComponents/Tasks";
import { projectBorder } from "../config/Borders";
import { projectShadow } from "../config/BoxShadows";

export const Dashboard = () => {
  const [projectId, setProjectId] = useState("");

  return (
    <Box zIndex={2} w="100%">
      <Box m="auto" w="100%" maxW="1100px">
        <Flex
          direction={["column", "column", "row", "row"]}
          gap="10px"
          px="5px"
          justifyContent="space-between"
        >
          <Box flex={1}>
            <Box
              rounded={"md"}
              border={projectBorder}
              boxShadow={projectShadow}
              p="5px"
            >
              <CreateProject />
              <Projects projectId={projectId} setProjectId={setProjectId} />
            </Box>
          </Box>
          <Box flex={3}>
            <Box
              rounded={"md"}
              border={projectBorder}
              boxShadow={projectShadow}
            >
              <ProjectHeader
                setProjectId={setProjectId}
                projectId={projectId}
              />
              {projectId ? <Tasks projectId={projectId} /> : null}
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
