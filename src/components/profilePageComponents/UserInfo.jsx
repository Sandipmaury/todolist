import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

export const UserInfo = () => {
  const userDetails = useSelector((store) => store.ProfileReducer.data)?.data
    ?.user;

  document.title = `Todo list | ${userDetails?.username}'s profile`;
  return (
    <Flex
      justifyContent={"space-between"}
      w={"100%"}
      direction={["column", "row", "row", "row"]}
      fontSize="1xl"
      px={2}
      border={"1px solid #e8f0fe"}
    >
      <Box fontWeight={"medium"}>
        <Flex gap={2} alignItems={"center"}>
          <Text>UserId:-</Text>
          <Text fontWeight={"normal"}> {userDetails?._id} </Text>
        </Flex>
        <Flex gap={2} alignItems={"center"}>
          <Text>Username:- </Text>
          <Text fontWeight={"normal"}>{userDetails?.username}</Text>
        </Flex>
        <Flex gap={2} alignItems={"center"}>
          <Text>Email:- </Text>
          <Text fontWeight={"normal"}>{userDetails?.email} </Text>
        </Flex>
      </Box>
      <Box fontWeight={"medium"}>
        <Flex gap={2} alignItems={"center"}>
          <Text>Role:- </Text>
          <Text fontWeight={"normal"}>{userDetails?.role} </Text>
        </Flex>
        <Flex gap={2} alignItems={"center"}>
          <Text>Register at:- </Text>
          <Text fontWeight={"normal"}>{userDetails?.registerAt}</Text>
        </Flex>
        <Flex gap={2} alignItems={"center"}>
          <Text>Last login:-</Text>
          <Text fontWeight={"normal"}>{userDetails?.loginAt}</Text>
        </Flex>
      </Box>
    </Flex>
  );
};
