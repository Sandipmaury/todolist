import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { mainBox } from "./config/Backgrounds";
import { getUser } from "./redux/AuthReducer/actions";
import { AllRoute } from "./routes/Routes";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);
  return (
    <Box bg={mainBox} minW="350px" w="100%">
      <AllRoute />
    </Box>
  );
}
