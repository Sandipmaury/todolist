import {
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../../redux/AuthReducer/actions";

export const User = () => {
  const userDetails = useSelector((store) => store.AuthReducer.userDetails);
  const navigate = useNavigate();

  const user = userDetails?.data?.username
    .split(" ")
    .map((el) => el[0])
    .join("");
  return (
    <Flex
      w="50px"
      h="50px"
      alignItems="center"
      justifyContent="center"
      borderRadius="50%"
      border="2px solid #e8f0fe"
      cursor="pointer"
    >
      <Menu>
        <MenuButton fontSize="16px" as={Text}>
          {user}
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => navigate("/user")}>Profile</MenuItem>
          <MenuItem onClick={() => removeToken()}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
