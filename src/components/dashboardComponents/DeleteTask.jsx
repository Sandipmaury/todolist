import { Box, Tooltip, useToast } from "@chakra-ui/react";
import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/TaskReducer/actions";

export const DeleteTask = ({ projectId, taskId }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const clickHandler = () => {
    dispatch(deleteTask(projectId, taskId)).then(() => {
      toast({
        title: "Task deleted.",
        position: "top-right",
      });
    });
  };
  return (
    <Tooltip hasArrow label="Delete Task">
      <Box cursor={"pointer"} onClick={clickHandler} fontSize="25px">
        <MdDelete />
      </Box>
    </Tooltip>
  );
};
