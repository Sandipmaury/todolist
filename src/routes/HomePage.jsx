import { Box, useColorMode } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { CopyRight } from "../components/homePageComponents/CopyRight";
import { Footer } from "../components/homePageComponents/Footer";
import { Section } from "../components/homePageComponents/Section";
import { HomePageData } from "../config/utils";

export const HomePage = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  useEffect(() => {
    if (colorMode === "dark") {
      toggleColorMode();
    }
  }, [colorMode]);
  return (
    <Box zIndex={2} w="100%">
      {HomePageData?.map((el, index) => (
        <Section
          key={index}
          title={el?.title}
          discription={el?.discription}
          img={el?.img}
          direction={index % 2 === 0 ? "row" : "row-reverse"}
        />
      ))}
      <Footer />
      <CopyRight />
    </Box>
  );
};
