import { Box, Flex, Text, useColorMode, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { BiTask } from "react-icons/bi";
import { MdDragIndicator } from "react-icons/md";
import { taskCardBg, taskCardBgOnDrag } from "../../config/Backgrounds";
import { taskCardShadow, taskCardShadowOnDrag } from "../../config/BoxShadows";
import { taskCardHover } from "../../config/Hover";
import { TaskInDetails } from "./TaskInDetail";

export const TaskCard = ({ title, discription, projectId, taskId, index }) => {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  // if more than 5 wards in title
  let header = title?.split(" ");
  if (header?.length > 5) {
    header.length = 5;
    header = header?.join(" ") + "...";
  } else {
    header = header?.join(" ");
  }

  // if more than 20 words in discription
  let about = discription?.split(" ");
  if (about?.length > 20) {
    about.length = 20;
    about = about?.join(" ") + "...";
  } else {
    about?.join(" ");
  }

  return (
    <>
      <Draggable draggableId={taskId} index={index}>
        {(provided, snapshot) => (
          <Box
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <Flex
              my="10px"
              p="5px 5px"
              rounded={"md"}
              boxShadow={
                snapshot.isDragging
                  ? colorMode === "dark"
                    ? taskCardShadowOnDrag.darkMode
                    : taskCardShadowOnDrag.lightMode
                  : colorMode === "dark"
                  ? taskCardShadow.darkMode
                  : taskCardShadow.lightMode
              }
              _hover={
                colorMode === "dark"
                  ? taskCardHover.darkMode
                  : taskCardHover.lightMode
              }
              bg={
                snapshot.isDragging
                  ? colorMode === "dark"
                    ? taskCardBgOnDrag.darkMode
                    : taskCardBgOnDrag.lightMode
                  : colorMode === "dark"
                  ? taskCardBg.darkMode
                  : taskCardBg.lightMode
              }
              transition={"0.1s"}
              alignItems={"center"}
              justifyContent={"space-between"}
              onClick={onOpen}
            >
              <Box>
                <Flex gap={2}>
                  <Box pt={"2px"}>
                    <BiTask />
                  </Box>
                  <Text lineHeight={5} fontSize={"17px"} fontWeight={"medium"}>
                    {" "}
                    {header}{" "}
                  </Text>
                </Flex>
                <Text fontSize={"12px"} fontWeight={"medium"}>
                  {" "}
                  {about}{" "}
                </Text>
              </Box>
              <Box cursor={"move"}>
                <MdDragIndicator />
              </Box>
            </Flex>
          </Box>
        )}
      </Draggable>
      <TaskInDetails
        projectId={projectId}
        taskId={taskId}
        onClose={onClose}
        isOpen={isOpen}
      />
    </>
  );
};
