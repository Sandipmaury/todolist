import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  Tooltip,
  useColorMode,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { GrAdd } from "react-icons/gr";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export const CreateTask = ({ projectId, header, postFunction }) => {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const taskRef = useRef();
  const dispatch = useDispatch();
  const toast = useToast();

  const isLoading = useSelector((store) => store.TaskReducer.isLoading);

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(
      postFunction(projectId, {
        title: taskRef.title,
        discription: taskRef.discription,
        projectId: projectId,
        status: "created",
      })
    ).then(() => {
      toast({
        title: "Task Created.",
        position: "top-right",
      });
      onClose();
    });
  };

  return (
    <>
      <Tooltip label={"create task"}>
        <Box
          color={colorMode === "dark" ? "#ffffff" : "black"}
          onClick={onOpen}
        >
          <GrAdd />
        </Box>
      </Tooltip>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{header} your task</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={(e) => submitHandler(e)}>
              <FormControl isRequired>
                <FormLabel>Task Title</FormLabel>
                <Input
                  onChange={(e) => (taskRef.title = e.target.value)}
                  placeholder="enter title here"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Discription</FormLabel>
                <Textarea
                  onChange={(e) => (taskRef.discription = e.target.value)}
                  spellCheck={true}
                  placeholder="enter sort discription"
                />
              </FormControl>
              <Flex direction={"row-reverse"} mt="20px">
                <Button onClick={onClose}>Cancel</Button>
                <Button
                  isLoading={isLoading}
                  type="submit"
                  colorScheme="blue"
                  mr={3}
                >
                  {header} Task
                </Button>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
