import { Box, Button, Collapse, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillProject } from "react-icons/ai";
import { useSelector } from "react-redux";
import { DeleteProject } from "./DeleteProject";
import { UpdateProject } from "./UpdateProject";

export const ProjectHeader = ({ setProjectId, projectId, projects }) => {
  const [show, setShow] = useState(false);
  const data = useSelector((store) => store.ProjectReducer.data);
  const userDetails = useSelector((store) => store.AuthReducer.userDetails);

  // get selected project
  const project = projects?.title
    ? projects
    : data?.data?.find((el) => el?._id === projectId);
  const showButton = project?.about?.length > 230;

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
      <Text>{data?.data?.length === 0 ? "Create" : "Select"} Project</Text>
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
          {userDetails?.data?.userId === project?.userId ? (
            <UpdateProject project={project} />
          ) : null}
          {userDetails?.data?.userId === project?.userId ? (
            <DeleteProject
              setProjectId={setProjectId}
              projectId={projectId || project?._id}
            />
          ) : null}
        </Flex>
      </Flex>
      {/* date, time and type */}
      <Flex mt={-2} gap={2} alignItems={"center"}>
        <Text fontSize={"12px"} fontWeight={"medium"}>
          {" "}
          {project?.createdAt}{" "}
        </Text>
        <Text
          borderRadius={6}
          p={1}
          bg={"#e8f0fe"}
          fontSize={"12px"}
          fontWeight={"medium"}
        >
          {" "}
          {project?.type
            ?.split("")
            ?.map((el, i) => (i === 0 ? el.toUpperCase() : el))
            ?.join("")}{" "}
        </Text>
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
