import {
  Box,
  Collapse,
  Flex,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { GiRunningNinja } from "react-icons/gi";
import { useSelector } from "react-redux";
import { taskCreated, taskPending } from "../../config/Borders";
import { updateTask } from "../../redux/TaskReducer/actions";
import { TaskCard } from "./TaskCard";

export const RunningTask = ({ projectId }) => {
  const { isOpen, onToggle } = useDisclosure();
  const data = useSelector((store) => store.TaskReducer.data);
  const taskArr = data?.data?.filter((el) => el.status === "running").reverse();
  return (
    <Box rounded={"md"} border={taskCreated}>
      <Box rounded={"md"} border={taskPending}>
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
      </Box>
      <Collapse in={isOpen} animateOpacity>
        <Box px={2}>
          {taskArr?.map((el, index) => (
            <TaskCard
              key={index}
              title={el?.title}
              discription={el?.discription}
              status={el?.status}
              projectId={projectId}
              taskId={el?._id}
            />
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};
