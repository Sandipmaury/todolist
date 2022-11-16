import { Box, Button, Collapse, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { DeleteProject } from "./DeleteProject";
import { UpdateProject } from "./UpdateProject";

export const ProjectHeader = ({ setProjectId, projectId }) => {
  const [show, setShow] = useState(false);
  const data = useSelector((store) => store.ProjectReducer.data);
  const project = data?.data?.find((el) => el?._id === projectId);
  const showButton = project?.about.length > 230;

  return projectId === "" ? (
    <Text
      color={"lightgray"}
      fontSize={["1xl", "1xl", "2xl", "2xl"]}
      fontWeight={"bold"}
      p="20px"
    >
      Select Project
    </Text>
  ) : (
    <Box p="10px" border={"1px solid red"} w="100%">
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        {/* project title */}
        <Text fontSize={["1xl", "1xl", "2xl", "2xl"]} fontWeight={"bold"}>
          {project?.title}
        </Text>
        <Flex
          alignItems={"center"}
          gap={3}
          fontSize={["1xl", "1xl", "2xl", "2xl"]}
        >
          <UpdateProject project={project} />
          <DeleteProject setProjectId={setProjectId} projectId={projectId} />
        </Flex>
      </Flex>
      {/* about project */}
      <Box flex={1}>
        <Collapse startingHeight={50} in={show}>
          <Text mt="5px" fontSize={"15px"} fontWeight={"medium"}>
            {project?.about}
          </Text>
        </Collapse>
        {showButton ? (
          <Button size="sm" onClick={() => setShow(!show)} mt="1rem">
            Show {show ? "Less" : "More"}
          </Button>
        ) : null}
      </Box>
    </Box>
  );
};
