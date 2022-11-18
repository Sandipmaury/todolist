import {
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Loading } from "../components/Loading";
import { loginUser } from "../redux/AuthReducer/actions";
import todolist from "../components/navbarComponents/todolistLogo.png";
import { loginPage } from "../config/Backgrounds";
import { loginBorder } from "../config/Borders";
import { loginButtonHover } from "../config/Hover";

export const Login = () => {
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const { colorMode } = useColorMode();
  const loginRef = useRef();

  const userDetails = useSelector((store) => store.AuthReducer.userDetails);
  const isError = useSelector((store) => store.AuthReducer.isError);
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);

  // login form handler
  const formHandler = (event) => {
    event.preventDefault();
    dispatch(loginUser({ email: loginRef.email, password: loginRef.password }));
  };

  useEffect(() => {
    if (isError) {
      toast({
        title: "Authentication failed.",
        description: userDetails?.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    if (isAuth) {
      toast({
        title: "Authentication successfull.",
        description: userDetails?.message,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      return navigate(
        location?.state?.pathname ? location?.state?.pathname : "/dashboard",
        { replace: true }
      );
    }
  }, [isAuth, isError]);

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      w="100%"
      h="100vh"
      minW="350px"
      zIndex={2}
      px="10px"
      bg={
        colorMode === "dark"
          ? loginPage.darkMode.mainBox
          : loginPage.lightMode.mainBox
      }
    >
      <Flex
        border={loginBorder}
        direction="column"
        alignItems="center"
        m="auto"
        p="30px"
        borderRadius="1rem"
        color={"#484bf2"}
        bg={
          colorMode === "dark"
            ? loginPage.darkMode.loginBox
            : loginPage.lightMode.loginBox
        }
      >
        <Image w="50%" src={todolist} />
        <Text mb="10px" fontSize="30px" fontWeight="medium">
          Login
        </Text>
        <form onSubmit={(e) => formHandler(e)}>
          <FormControl my="20px" isRequired>
            <FormLabel>Email</FormLabel>
            <InputGroup>
              <Input
                onChange={(e) => (loginRef.email = e.target.value)}
                placeholder="enter your email"
                type="email"
              />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                placeholder="enter your password"
                minLength={6}
                onChange={(e) => (loginRef.password = e.target.value)}
                type={visible ? "text" : "password"}
              />
              <InputRightAddon
                onClick={() => setVisible(!visible)}
                cursor="pointer"
                children={visible ? <MdVisibility /> : <MdVisibilityOff />}
              />
            </InputGroup>
          </FormControl>
          <FormControl my="20px">
            <InputGroup>
              <Input
                _hover={
                  colorMode === "dark"
                    ? loginButtonHover.darkMode
                    : loginButtonHover.lightMode
                }
                cursor="pointer"
                type="submit"
                value="Login"
                color={"#ffffff"}
              />
            </InputGroup>
          </FormControl>
        </form>
        <Flex
          fontSize="15px"
          fontWeight="medium"
          alignItems="center"
          gap="5px"
          color="red"
        >
          <Text color={colorMode === "dark" ? "#ffffff" : "black"}>
            Don't have account?
          </Text>
          <Link
            to={"/register"}
            state={
              location?.state?.pathname
                ? location?.state?.pathname
                : "/dashboard"
            }
            replace={true}
          >
            Create one
          </Link>
        </Flex>
      </Flex>
      <Loading />
    </Flex>
  );
};
