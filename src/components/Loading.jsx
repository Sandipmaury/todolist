import { Circles } from "react-loader-spinner";
import { Flex, Modal, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export const Loading = ({ state }) => {
  const isLoading = useSelector((store) => store.AuthReducer.isLoading);
  const isLoading1 = useSelector((store) => store.ProfileReducer.isLoading);

  return (
    <Modal isCentered isOpen={isLoading || isLoading1 || state}>
      <ModalOverlay />
      <ModalContent bg="transparent" boxShadow="none">
        <Flex justifyContent="center">
          <Circles color="#e8f0fe" />
        </Flex>
      </ModalContent>
    </Modal>
  );
};
