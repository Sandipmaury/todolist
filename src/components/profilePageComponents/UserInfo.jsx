import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

export const UserInfo = () => {
  const userDetails = useSelector((store) => store.ProfileReducer.data)?.data
    ?.user;

  document.title = `${userDetails?.username}'s profile`;
  return (
    <Flex
      justifyContent={"space-between"}
      w={"100%"}
      direction={["column", "row", "row", "row"]}
      fontSize="1xl"
      px={2}
      border={"1px solid #e8f0fe"}
    >
      <Box>
        <Text> UserId:- {userDetails?._id} </Text>
        <Text> Username:- {userDetails?.username} </Text>
        <Text> Email:- {userDetails?.email} </Text>
      </Box>
      <Box>
        <Text> Role:- {userDetails?.role} </Text>
        <Text> Register at:- {userDetails?.registerAt} </Text>
        <Text> Last login:- {userDetails?.loginAt} </Text>
      </Box>
    </Flex>
  );
};
