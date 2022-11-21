import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { CreateProject } from "../components/dashboardComponents/CreateProject";
import { ProjectHeader } from "../components/dashboardComponents/ProjectHeader";
import { Projects } from "../components/dashboardComponents/Projects";
import { Tasks } from "../components/dashboardComponents/Tasks";
import { projectBorder } from "../config/Borders";
import { projectShadow } from "../config/BoxShadows";
import { updateTask } from "../redux/TaskReducer/actions";

export const Dashboard = () => {
  const [projectId, setProjectId] = useState("");
  const dispatch = useDispatch();

  document.title = "create projects and manage.";

  const dragEndHandler = (event) => {
    const { destination, source, draggableId } = event;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    if (draggableId && projectId) {
      dispatch(
        updateTask(projectId, draggableId, {
          status: destination.droppableId,
        })
      );
    }
  };

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
              <DragDropContext onDragEnd={(e) => dragEndHandler(e)}>
                {projectId ? <Tasks projectId={projectId} /> : null}
              </DragDropContext>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
