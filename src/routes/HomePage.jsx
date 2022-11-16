import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      navigate("/dashboard");
    }
  }, [isAuth]);
  return (
    <Box zIndex={2} w="100%">
      <Box m="auto" w="100%" maxW="1100px" border="1px solid red" h="400px">
        HomePage
      </Box>
    </Box>
  );
};
