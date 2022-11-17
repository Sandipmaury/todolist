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
import { GiRunningNinja } from "react-icons/gi";
import { useSelector } from "react-redux";
import { taskCreated, taskPending } from "../../config/Borders";
import { TaskCard } from "./TaskCard";

export const RunningTask = ({ projectId }) => {
  const { isOpen, onToggle } = useDisclosure();
  const data = useSelector((store) => store.TaskReducer.data);
  const taskArr = data?.data?.filter((el) => el.status === "running");
  return (
    <Box rounded={"md"} border={taskCreated}>
      <Droppable droppableId={"running"}>
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
                onClick={onToggle}
                border={taskPending}
              >
                <GiRunningNinja />
                <Text>Running</Text>
                <Text color={"#ffa500"}>{taskArr?.length}</Text>
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
