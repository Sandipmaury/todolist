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
import { FaChild } from "react-icons/fa";
import { useSelector } from "react-redux";
import { taskCompleted, taskCreated } from "../../config/Borders";
import { TaskCard } from "./TaskCard";

export const CompletedTask = ({ projectId }) => {
  const { isOpen, onToggle } = useDisclosure();
  const data = useSelector((store) => store.TaskReducer.data);
  const taskArr = data?.data
    ?.filter((el) => el.status === "completed")
    .sort((a, b) => {
      if (a.updatedAt < b.updatedAt) return -1;
      else return 1;
    });

  return (
    <Box rounded={"md"} border={taskCreated}>
      <Droppable droppableId={"completed"}>
        {(provided) => (
          <Box ref={provided.innerRef} {...provided.droppableProps}>
            <Tooltip hasArrow label={"click here"}>
              <Flex
                cursor={"pointer"}
                fontSize={"2xl"}
                fontWeight={"medium"}
                alignItems={"center"}
                gap={2}
                pl={2}
                border={taskCompleted}
                onClick={onToggle}
              >
                <FaChild />
                <Text>Completed</Text>
                <Text color={"red"}>{taskArr?.length}</Text>
              </Flex>
            </Tooltip>
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
