import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getProject } from "../../redux/ProjectReducer/actions";
import { ProjectCard } from "./ProjectCard";

export const Projects = ({ setProjectId }) => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.ProjectReducer.data);

  useEffect(() => {
    dispatch(getProject());
  }, []);
  return (
    <Box>
      {data?.data?.map((el, index) => (
        <ProjectCard
          key={index}
          title={el?.title}
          projectId={el?._id}
          setProjectId={setProjectId}
        />
      ))}
    </Box>
  );
};
