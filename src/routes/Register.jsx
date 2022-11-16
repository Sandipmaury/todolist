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
import { registerUser } from "../redux/AuthReducer/actions";
import todolist from "../components/navbarComponents/todolistLogo.png";
import { registerPage } from "../config/Backgrounds";
import { registerBorder } from "../config/Borders";
import { registerButtonHover } from "../config/Hover";

export const Register = () => {
  const [visible, setVisible] = useState(false);
  const registerRef = useRef();
  const location = useLocation();
  const { colorMode } = useColorMode();

  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const userDetails = useSelector((store) => store.AuthReducer.userDetails);
  const isError = useSelector((store) => store.AuthReducer.isError);
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);

  // register form handler
  const formHandler = async (event) => {
    event.preventDefault();
    dispatch(
      registerUser({
        username: registerRef.username,
        email: registerRef.email,
        password: registerRef.password,
      })
    );
  };

  useEffect(() => {
    if (isError) {
      toast({
        title: "Account creation failed.",
        description: userDetails?.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    if (isAuth) {
      toast({
        title: "Account created.",
        description: userDetails?.message,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      navigate("/dashboard");
    }
  }, [isError, isAuth]);

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      w="100%"
      maxW="100vw"
      h="100vh"
      minW="350px"
      zIndex={2}
      px="10px"
      bg={registerPage.mainBox}
    >
      <Flex
        border={registerBorder}
        direction="column"
        alignItems="center"
        m="auto"
        p="30px"
        borderRadius="1rem"
        bg={registerPage.registerBox}
      >
        <Image w="50%" src={todolist} />
        <Text mb="10px" fontSize="30px" fontWeight="medium">
          Register
        </Text>
        <form onSubmit={(e) => formHandler(e)}>
          <FormControl isRequired>
            <FormLabel>Username</FormLabel>
            <InputGroup>
              <Input
                onChange={(e) => (registerRef.username = e.target.value)}
                placeholder="enter your username"
                type="text"
              />
            </InputGroup>
          </FormControl>
          <FormControl my="20px" isRequired>
            <FormLabel>Email</FormLabel>
            <InputGroup>
              <Input
                onChange={(e) => (registerRef.email = e.target.value)}
                placeholder="enter your email"
                type="email"
              />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                onChange={(e) => (registerRef.password = e.target.value)}
                placeholder="enter your password"
                type={visible ? "text" : "password"}
                minLength="6"
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
                    ? registerButtonHover.darkMode
                    : registerButtonHover.lightMode
                }
                cursor="pointer"
                type="submit"
                value="Register"
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
            Already have an account?
          </Text>
          <Link
            to={"/login"}
            state={
              location?.state?.pathname
                ? location?.state?.pathname
                : "/dashboard"
            }
            replace={true}
          >
            login
          </Link>
        </Flex>
      </Flex>
      <Loading />
    </Flex>
  );
};
