import { Box, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Loading } from "../components/Loading";
import { ProjectsBox } from "../components/profilePageComponents/ProjectsBox";
import { UserInfo } from "../components/profilePageComponents/UserInfo";
import { getUserProfile } from "../redux/ProfileReducer/actions";

export const UserProfile = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile(location?.state?.userId));
  }, [location?.state?.userId, dispatch]);

  return (
    <Box zIndex={2} w="100%">
      <Box m="auto" w="100%" maxW="1100px" px={2} border="2px solid #e8f0fe">
        <Text fontSize="2xl" fontWeight={"semibold"}>
          User Card
        </Text>
        <UserInfo />
        <Text mt={2} fontSize="2xl" fontWeight={"semibold"}>
          Projects
        </Text>
        <ProjectsBox />
      </Box>
      <Loading />
    </Box>
  );
};
