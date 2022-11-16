import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import todolist from "./todolistLogo.png";

export const Logo = () => {
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);

  return (
    <NavLink to={isAuth ? "/dashboard" : "/"}>
      <Box w={["100px", "100px", "120px", "150px"]}>
        <Image w="100%" src={todolist} alt="logo" />
      </Box>
    </NavLink>
  );
};
