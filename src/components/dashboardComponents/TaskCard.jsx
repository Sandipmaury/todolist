import {
  Box,
  Flex,
  Text,
  Tooltip,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { BiTask } from "react-icons/bi";
import { MdDragIndicator } from "react-icons/md";
import { useDispatch } from "react-redux";
import { projectCard } from "../../config/Backgrounds";
import { projectCardShadow } from "../../config/BoxShadows";
import { projectCardHover } from "../../config/Hover";
import { updateTask } from "../../redux/TaskReducer/actions";
import { DeleteTask } from "./DeleteTask";

export const TaskCard = ({ title, discription, status, projectId, taskId }) => {
  const { colorMode } = useColorMode();
  const dispatch = useDispatch();
  const toast = useToast();

  // move cards on double click
  const doubleClickHandler = () => {
    dispatch(
      updateTask(
        projectId,
        taskId,
        status === "created"
          ? { status: "running" }
          : status === "running"
          ? { status: "completed" }
          : { status: "created" }
      )
    ).then(() => {
      toast({
        title: "Task updated.",
        position: "top-right",
      });
    });
  };

  return (
    <Tooltip hasArrow label="Double click to move.">
      <Flex
        my="10px"
        p="5px 5px"
        rounded={"md"}
        cursor={"pointer"}
        boxShadow={projectCardShadow}
        _hover={
          colorMode === "dark"
            ? projectCardHover.darkMode
            : projectCardHover.lightMode
        }
        bg={
          false
            ? colorMode === "dark"
              ? projectCard.darkMode
              : projectCard.lightMode
            : "transparent"
        }
        transition={"0.1s"}
        onDoubleClick={doubleClickHandler}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box>
          <Flex alignItems={"center"} gap={2}>
            <BiTask />
            <Text fontSize={"17px"} fontWeight={"medium"}>
              {" "}
              {title}{" "}
            </Text>
          </Flex>
          <Text fontSize={"12px"} fontWeight={"medium"}>
            {" "}
            {discription}{" "}
          </Text>
        </Box>

        {!(status === "completed") ? (
          <Box cursor={"move"}>
            <MdDragIndicator />
          </Box>
        ) : null}
        {status === "completed" ? (
          <DeleteTask projectId={projectId} taskId={taskId} />
        ) : null}
      </Flex>
    </Tooltip>
  );
};
