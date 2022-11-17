import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { navbarBg } from "../../config/Backgrounds";
import { navbarShadow } from "../../config/BoxShadows";
import { Login } from "./LoginButton";
import { Logo } from "./Logo";
import { ToggleColorMode } from "./ToggleColorMode";
import { User } from "./User";

export const Navbar = () => {
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  const { colorMode } = useColorMode();
  return (
    <Box
      h={["40px", "40px", "60px", "60px"]}
      w="100%"
      bg={colorMode === "dark" ? navbarBg.darkMode : navbarBg.mainBox}
      position="sticky"
      top={0}
      minW="350px"
      zIndex={5}
      mb="20px"
      boxShadow={navbarShadow}
    >
      <Flex
        alignItems="center"
        px="10px"
        w="100%"
        maxW="1100px"
        h="100%"
        m="auto"
      >
        <Flex alignItems={"center"} gap={"10px"} flex={1}>
          <Logo />
          {isAuth ? <ToggleColorMode /> : null}
        </Flex>
        <Flex
          fontSize={["16px", "16px", "20px", "20px"]}
          alignItems="center"
          fontWeight="medium"
          gap={["14px", "16px", "20px", "20px"]}
        >
          <NavLink to={isAuth ? "/dashboard" : "/"}>
            <Text>Home</Text>
          </NavLink>
          {isAuth ? <User /> : <Login />}
        </Flex>
      </Flex>
    </Box>
  );
};
