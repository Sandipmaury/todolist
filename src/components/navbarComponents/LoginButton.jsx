import { Button, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../redux/AuthReducer/actions";

export const Login = () => {
  const navigate = useNavigate();
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    dispatch(getUser()).then(({ success, message }) => {
      if (success) {
        toast({
          title: "Authentication successfull.",
          description: "You are authorized to server our services.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Account creation failed.",
          description: message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
        navigate("/login");
      }
    });
  }, []);
  return (
    <Button size={["sm", "sm", "md", "md"]} onClick={() => navigate("/login")}>
      Login
    </Button>
  );
};
