import {
  Box,
  Collapse,
  Flex,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { FaListAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { projectColumnBg } from "../../config/Backgrounds";
import { taskCreated } from "../../config/Borders";
import { createTask } from "../../redux/TaskReducer/actions";
import { CreateTask } from "./CreateTask";
import { TaskCard } from "./TaskCard";

export const CreatedTask = ({ projectId }) => {
  const { isOpen, onToggle } = useDisclosure();
  const data = useSelector((store) => store.TaskReducer.data);
  const taskArr = data?.data?.filter((el) => el.status === "created");
  return (
    <Box bg={projectColumnBg} rounded={"md"} border={taskCreated}>
      <Droppable droppableId={"created"}>
        {(provided) => (
          <Box ref={provided.innerRef} {...provided.droppableProps}>
            <Flex
              fontSize={"2xl"}
              fontWeight={"medium"}
              px={2}
              alignItems={"center"}
              cursor={"pointer"}
              border={taskCreated}
              justifyContent={"space-between"}
            >
              <Tooltip hasArrow label={"click here"}>
                <Flex flex={1} onClick={onToggle} gap={2} alignItems={"center"}>
                  <FaListAlt />
                  <Text>Created</Text>
                  <Text color={"green"}>{taskArr?.length}</Text>
                </Flex>
              </Tooltip>
              <CreateTask
                projectId={projectId}
                header={"Create"}
                postFunction={createTask}
              />
            </Flex>
            <Collapse in={isOpen} animateOpacity>
              <Box px={2}>
                {taskArr?.map((el, index) => (
                  <TaskCard
                    key={index}
                    title={el?.title}
                    discription={el?.discription}
                    projectId={projectId}
                    taskId={el?._id}
                    index={index}
                  />
                ))}
                {provided.placeholder}
              </Box>
            </Collapse>
          </Box>
        )}
      </Droppable>
    </Box>
  );
};
