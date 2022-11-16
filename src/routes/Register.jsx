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
import { registerUser } from "../redux/AuthReducer/actions";
import todolist from "../components/navbarComponents/todolist.png";
import { registerPage } from "../config/Backgrounds";
import { registerBorder } from "../config/Borders";

export const Register = () => {
  const [visible, setVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();

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
      registerUser({ username: username, email: email, password: password })
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="enter your username"
                type="text"
              />
            </InputGroup>
          </FormControl>
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
                onChange={(e) => setPassword(e.target.value)}
                value={password}
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
                _hover={{ backgroundColor: "#e8f0fe" }}
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
          <Text color="black">Already have an account?</Text>
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
      <Loding />
    </Flex>
  );
};
