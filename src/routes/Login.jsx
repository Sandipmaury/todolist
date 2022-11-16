import {
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Loding } from "../components/Loding";
import { loginUser } from "../redux/AuthReducer/actions";
import todolist from "../components/navbarComponents/todolist.png";
import { loginPage } from "../config/Backgrounds";
import { loginBorder } from "../config/Borders";

export const Login = () => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const location = useLocation();

  const userDetails = useSelector((store) => store.AuthReducer.userDetails);
  const isError = useSelector((store) => store.AuthReducer.isError);
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);

  // login form handler
  const formHandler = (event) => {
    event.preventDefault();
    dispatch(loginUser({ email: email, password: password }));
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
      bg={loginPage.mainBox}
    >
      <Flex
        border={loginBorder}
        direction="column"
        alignItems="center"
        m="auto"
        p="30px"
        borderRadius="1rem"
        bg={loginPage.loginBox}
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
                onChange={(e) => setEmail(e.target.value)}
                value={email}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                _hover={{ backgroundColor: "#e8f0fe" }}
                cursor="pointer"
                type="submit"
                value="Login"
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
          <Text color="black">Don't have account?</Text>
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
      <Loding />
    </Flex>
  );
};
