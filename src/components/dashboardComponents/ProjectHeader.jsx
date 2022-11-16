import { Box, Button, Collapse, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillProject } from "react-icons/ai";
import { useSelector } from "react-redux";
import { DeleteProject } from "./DeleteProject";
import { UpdateProject } from "./UpdateProject";

export const ProjectHeader = ({ setProjectId, projectId }) => {
  const [show, setShow] = useState(false);
  const data = useSelector((store) => store.ProjectReducer.data);
  const project = data?.data?.find((el) => el?._id === projectId);
  const showButton = project?.about.length > 230;

  return projectId === "" ? (
    <Flex
      color={"lightgray"}
      p="20px"
      fontSize={["1xl", "1xl", "2xl", "2xl"]}
      fontWeight={"bold"}
      alignItems={"center"}
      gap="5px"
    >
      <AiFillProject />
      <Text>Select Project</Text>
    </Flex>
  ) : (
    <Box p="10px" w="100%">
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        {/* project title */}
        <Flex
          py="10px"
          fontSize={["2xl", "2xl", "2xl", "2xl"]}
          fontWeight={"bold"}
          alignItems={"center"}
          gap="5px"
        >
          <AiFillProject />
          <Text>{project?.title}</Text>
        </Flex>
        <Flex
          alignItems={"center"}
          gap={3}
          fontSize={["1xl", "1xl", "2xl", "2xl"]}
        >
          {/* delete and edit buttons */}
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
