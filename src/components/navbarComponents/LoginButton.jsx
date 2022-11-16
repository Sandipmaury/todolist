import { Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Loading } from "../Loading";

export const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        size={["sm", "sm", "md", "md"]}
        onClick={() => navigate("/login")}
      >
        Login
      </Button>
      <Loading />
    </>
  );
};
