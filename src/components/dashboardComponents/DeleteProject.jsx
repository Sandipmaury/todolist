import { Button, Tooltip, useToast } from "@chakra-ui/react";
import React from "react";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteProject } from "../../redux/ProjectReducer/actions";

export const DeleteProject = ({ setProjectId, projectId }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const isLoading = useSelector((store) => store.ProjectReducer.isLoading);

  const clickHandler = () => {
    dispatch(deleteProject(projectId)).then(() => {
      toast({
        title: "Project deleted.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    });
    setProjectId("");
  };

  return (
    <Tooltip hasArrow label="Delete Project" fontSize="md">
      <Button
        disabled={projectId === ""}
        onClick={clickHandler}
        size={["xs", "sm", "md", "md"]}
        isLoading={isLoading}
      >
        <MdDelete />
      </Button>
    </Tooltip>
  );
};
