import { Box, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { searchCard } from "../../config/Backgrounds";

export const SearchResultCard = ({ onClose, data }) => {
  const { colorMode } = useColorMode();

  const navigate = useNavigate();
  const clickHandler = (userId) => {
    onClose();
    navigate("/profile", { state: { userId: userId } });
  };
  return (
    <Box mt={2}>
      {data?.length === 0 ? (
        <Text color={"lightgray"} p={2}>
          No result found
        </Text>
      ) : (
        data?.map((element, index) => (
          <Text
            _hover={
              colorMode === "dark" ? searchCard.darkMode : searchCard.lightMode
            }
            cursor={"pointer"}
            border={"1px solid lightgray"}
            p={2}
            key={index}
            onClick={() => clickHandler(element?._id)}
          >
            {element?.username}
          </Text>
        ))
      )}
    </Box>
  );
};
