import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Login } from "./LoginButton";
import { Logo } from "./Logo";
import { User } from "./User";

export const Navbar = () => {
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  return (
    <Box
      h={["40px", "40px", "60px", "60px"]}
      w="100%"
      border="1px solid red"
      bg="#ffffff"
      position="sticky"
      top={0}
      minW="350px"
      zIndex={5}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        px="10px"
        border="1px solid black"
        w="100%"
        maxW="1100px"
        h="100%"
        m="auto"
        bg="#ffffff"
      >
        <Logo />
        <Flex
          fontSize={["16px", "16px", "20px", "20px"]}
          alignItems="center"
          fontWeight="medium"
          gap="20px"
          bg="#ffffff"
        >
          <NavLink to="/">
            <Text>Home</Text>
          </NavLink>
          <NavLink to="/todos">
            <Text>Todos</Text>
          </NavLink>
          {isAuth ? <User /> : <Login />}
        </Flex>
      </Flex>
    </Box>
  );
};
