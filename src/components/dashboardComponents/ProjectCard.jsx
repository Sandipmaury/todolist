import { Flex, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import { AiFillProject } from "react-icons/ai";
import { projectCard } from "../../config/Backgrounds";
import { projectCardShadow } from "../../config/BoxShadows";
import { projectCardHover } from "../../config/Hover";

export const ProjectCard = ({ title, id, projectId, setProjectId }) => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      my="10px"
      p="5px 5px"
      rounded={"md"}
      cursor={"pointer"}
      boxShadow={projectCardShadow}
      _hover={
        colorMode === "dark"
          ? projectCardHover.darkMode
          : projectCardHover.lightMode
      }
      bg={
        id === projectId
          ? colorMode === "dark"
            ? projectCard.darkMode
            : projectCard.lightMode
          : "transparent"
      }
      transition={"0.1s"}
      alignItems={"center"}
      gap={2}
      onClick={() => {
        setProjectId(id);
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
