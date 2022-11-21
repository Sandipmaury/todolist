import {
  Button,
  Flex,
  FormControl,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { searchTeam } from "../../redux/AuthReducer/actions";
import { SearchResultCard } from "./SearchResultCard";

export const SearchTeam = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [title, setTitle] = useState("");
  const [result, setResult] = useState([]);

  const { data } = useSelector((store) => store.AuthReducer.userDetails);

  const submitHandler = (event) => {
    event.preventDefault();
    searchTeam(data?.userId, { q: title }).then(({ data }) => {
      setResult(data?.data);
    });
  };

  const closeModal = () => {
    setTitle("");
    setResult([]);
    onClose();
  };

  return (
    <>
      <Tooltip label={"Search team member"}>
        <Button onClick={onOpen}>
          <FaSearch />
        </Button>
      </Tooltip>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search Your Team</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={(e) => submitHandler(e)}>
              <FormControl isRequired>
                <Flex alignItems={"center"}>
                  <Input
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="enter full name"
                    type={"search"}
                    value={title}
                    borderRadius={"5px 0px 0px 5px"}
                  />
                  <Button
                    borderRadius={"0px 5px 5px 0px"}
                    type="submit"
                    children={<FaSearch />}
                  />
                </Flex>
              </FormControl>
            </form>

            <SearchResultCard onClose={onClose} data={result} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
