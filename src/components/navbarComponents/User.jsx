import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userBox } from "../../config/Borders";
import { userLogout } from "../../redux/AuthReducer/actions";

export const User = () => {
  const userDetails = useSelector((store) => store.AuthReducer.userDetails);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(userLogout());
  };

  const toolTipUsername = userDetails?.data?.username;

  const user = userDetails?.data?.username?.split(" ")?.map((el) => el[0]);

  return (
    <Menu>
      <Tooltip placement="left" hasArrow label={toolTipUsername} size={"md"}>
        <MenuButton
          cursor="pointer"
          fontSize={["13px", "13px", "16px", "16px"]}
          as={Box}
        >
          <Flex
            w={["35px", "35px", "50px", "50px"]}
            h={["35px", "35px", "50px", "50px"]}
            alignItems="center"
            justifyContent="center"
            borderRadius="50%"
            border={userBox}
          >
            {user}
          </Flex>
        </MenuButton>
      </Tooltip>
      <MenuList>
        <MenuItem
          onClick={() =>
            navigate("/profile", {
              state: { userId: userDetails?.data?.userId },
            })
          }
        >
          Profile
        </MenuItem>
        <MenuItem onClick={() => clickHandler()}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};
