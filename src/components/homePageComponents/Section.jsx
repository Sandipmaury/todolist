import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export const Section = ({ title, discription, img, direction, index }) => {
  const navigate = useNavigate();

  return (
    <Box bg={"white"}>
      <Flex
        alignItems={"center"}
        px={10}
        direction={["column-reverse", "column-reverse", direction, direction]}
        justifyContent={"space-between"}
      >
        <Flex direction={"column"} alignItems={"center"} flex={1}>
          <Text
            color={"#484bf2"}
            fontWeight={"bold"}
            fontSize={["2xl", "3xl", "3xl", "5xl"]}
          >
            {" "}
            {title}{" "}
          </Text>
          <Text
            color={"#ff8a82"}
            w={["80%", "70%", "60%", "50%"]}
            textAlign={"center"}
            fontWeight={"medium"}
            fontSize={["2xl", "2xl", "2xl", "3xl"]}
          >
            {" "}
            {discription}{" "}
          </Text>
          {index === 4 ? (
            <Button
              mt={5}
              _hover={{ backgroundColor: "#1b0f91" }}
              bg={"#484bf9"}
              color={"#ff8a82"}
              onClick={() => navigate("/register")}
            >
              Register Now
            </Button>
          ) : null}
        </Flex>
        <Image
          w={["80%", "80%", "35%", "35%"]}
          h={"100%"}
          alt={title}
          src={img}
        />
      </Flex>
    </Box>
  );
};
