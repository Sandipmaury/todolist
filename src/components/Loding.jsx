import { Circles } from "react-loader-spinner";
import { Flex, Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export const Loding = () => {
  const isLoading = useSelector((store) => store.AuthReducer.isLoding);

  return (
    <Modal isCentered isOpen={isLoading}>
      <ModalOverlay />
      <ModalContent bg="transparent" boxShadow="none">
        <Flex justifyContent="center">
          <Circles />
        </Flex>
      </ModalContent>
    </Modal>
  );
};
