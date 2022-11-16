import { Circles } from "react-loader-spinner";
import { Flex, Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export const Loding = ({ state }) => {
  const isLoading = useSelector((store) => store.AuthReducer.isLoding);

  return (
    <Modal isCentered isOpen={isLoading || state}>
      <ModalOverlay />
      <ModalContent bg="transparent" boxShadow="none">
        <Flex justifyContent="center">
          <Circles color="#e8f0fe" />
        </Flex>
      </ModalContent>
    </Modal>
  );
};
