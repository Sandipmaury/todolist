import {
  Box,
  Collapse,
  Flex,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FaChild } from "react-icons/fa";
import { useSelector } from "react-redux";
import { taskCompleted, taskCreated } from "../../config/Borders";
import { TaskCard } from "./TaskCard";

export const CompletedTask = ({ projectId }) => {
  const { isOpen, onToggle } = useDisclosure();
  const data = useSelector((store) => store.TaskReducer.data);
  const taskArr = data?.data
    ?.filter((el) => el.status === "completed")
    .reverse();

  return (
    <Box rounded={"md"} border={taskCreated}>
      <Box rounded={"md"} border={taskCompleted}>
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
      </Box>
      <Collapse in={isOpen} animateOpacity>
        <Box px={2}>
          {taskArr?.map((el, index) => (
            <TaskCard
              key={index}
              title={el?.title}
              discription={el?.discription}
              status={"completed"}
              projectId={projectId}
              taskId={el?._id}
            />
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};
