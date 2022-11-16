import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillProject } from "react-icons/ai";
import { projectCardShadow } from "../../config/BoxShadows";
import { projectCardHover } from "../../config/Hover";

export const ProjectCard = ({ title, projectId, setProjectId }) => {
  return (
    <Flex
      my="10px"
      p="5px 5px"
      rounded={"md"}
      cursor={"pointer"}
      boxShadow={projectCardShadow}
      _hover={projectCardHover}
      transition={"0.1s"}
      alignItems={"center"}
      gap={2}
      onClick={() => {
        setProjectId(projectId);
      }}
    >
      <AiFillProject />
      <Text fontSize={"17px"} fontWeight={"medium"}>
        {" "}
        {title}{" "}
      </Text>
    </Flex>
  );
};
