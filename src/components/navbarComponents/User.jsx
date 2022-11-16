import {
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogout } from "../../redux/AuthReducer/actions";

export const User = () => {
  const userDetails = useSelector((store) => store.AuthReducer.userDetails);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(userLogout());
  };

  const user = userDetails?.data?.username
    .split(" ")
    .map((el) => el[0])
    .join("")
    .toUpperCase();
  return (
    <Flex
      w={["35px", "35px", "50px", "50px"]}
      h={["35px", "35px", "50px", "50px"]}
      alignItems="center"
      justifyContent="center"
      borderRadius="50%"
      border="2px solid #e8f0fe"
      cursor="pointer"
      bg="#ffffff"
    >
      <Menu>
        <MenuButton fontSize={["13px", "13px", "16px", "16px"]} as={Text}>
          {user}
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => navigate("/user")}>Profile</MenuItem>
          <MenuItem onClick={() => clickHandler()}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
