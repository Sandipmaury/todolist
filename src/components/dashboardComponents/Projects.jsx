import { Box, Collapse } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getProject } from "../../redux/ProjectReducer/actions";
import { ProjectCard } from "./ProjectCard";

export const Projects = ({ projectId, setProjectId }) => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.ProjectReducer.data);
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);

  useEffect(() => {
    if (isAuth) {
      dispatch(getProject());
    }
  }, [isAuth]);
  return (
    <Box>
      {data?.data?.map((el, index) => (
        <ProjectCard
          key={index}
          title={el?.title}
          id={el?._id}
          projectId={projectId}
          setProjectId={setProjectId}
        />
      ))}
    </Box>
  );
};
