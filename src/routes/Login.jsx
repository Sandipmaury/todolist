import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Loding } from "../components/Loding";
import { loginUser } from "../redux/AuthReducer/actions";

export const Login = () => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  const formHandler = (event) => {
    event.preventDefault();
    dispatch(loginUser({ email: email, password: password })).then(
      ({ success, message }) => {
        if (success) {
          toast({
            title: "Authentication successfull.",
            description: "You are authorized to server our services.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          return navigate("/");
        }
        toast({
          title: "Account creation failed.",
          description: message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    );
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      w="100%"
      maxW="100vw"
      h="80vh"
      minW="350px"
      zIndex={2}
    >
      <Flex
        border="2px solid #e8f0fe"
        direction="column"
        alignItems="center"
        m="auto"
        p="30px"
        borderRadius="1rem"
        bg="#ffffff"
      >
        <Text mb="10px" fontSize="30px" fontWeight="medium">
          Login
        </Text>
        <form onSubmit={(e) => formHandler(e)}>
          <FormControl my="20px" isRequired>
            <FormLabel>Email:</FormLabel>
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
            <FormLabel>Password:</FormLabel>
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
          <Link to="/register">Create one</Link>
        </Flex>
      </Flex>
      <Loding />
    </Flex>
  );
};
