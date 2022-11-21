import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { ProjectHeader } from "../dashboardComponents/ProjectHeader";

export const ProjectsBox = () => {
  const projects = useSelector((store) => store.ProfileReducer.data)?.data
    ?.projects;

  return (
    <>
      {projects?.length ? (
        projects?.map((element, index) => (
          <Box key={index} border={"1px solid #e8f0fe"}>
            <ProjectHeader projects={element} />
          </Box>
        ))
      ) : (
        <Text fontWeight={"semibold"} color={"lightgray"}>
          No project found
        </Text>
      )}
    </>
  );
};
