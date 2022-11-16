import { Button } from "@chakra-ui/react";
import React from "react";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteProject } from "../../redux/ProjectReducer/actions";

export const DeleteProject = ({ setProjectId, projectId }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.ProjectReducer.isLoading);

  const clickHandler = () => {
    dispatch(deleteProject(projectId));
    setProjectId("");
  };

  return (
    <Button
      disabled={projectId === ""}
      onClick={clickHandler}
      size={["xs", "sm", "md", "md"]}
      isLoading={isLoading}
    >
      <MdDelete />
    </Button>
  );
};
