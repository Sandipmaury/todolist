import {
  Box,
  Button,
  FormControl,
  Input,
  InputGroup,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProjectBorder } from "../../config/Borders";
import { createProject } from "../../redux/ProjectReducer/actions";

export const FormCreateProject = ({ isOpen, onToggle, projectFunction }) => {
  const data = useSelector((store) => store.ProjectReducer.data);
  const isLoading = useSelector((store) => store.ProjectReducer.isLoading);
  const [title, setTitle] = useState(
    data?.data?.title ? data?.data?.title : ""
  );
  const [about, setAbout] = useState(
    data?.data?.about ? data?.data?.about : ""
  );
  const dispatch = useDispatch();
  const toast = useToast();

  const isError = useSelector((store) => store.ProjectReducer.isError);
  const isSuccessfull = useSelector(
    (store) => store.ProjectReducer.isSuccessfull
  );

  // project form handler
  const formHandler = (event) => {
    event.preventDefault();
    dispatch(createProject({ title: title, about: about }));
    onToggle();
  };

  useEffect(() => {
    if (!isOpen) {
      setAbout("");
      setTitle("");
    }
  }, [isOpen]);

  useEffect(() => {
    if (isError) {
      toast({
        title: "Project creation failed.",
        description: data?.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    if (isSuccessfull) {
      toast({
        title: "Project created.",
        description: data?.message,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  }, [isError, isSuccessfull]);

  return (
    <Box p="5px" rounded={"md"} border={createProjectBorder}>
      <form onSubmit={(e) => formHandler(e)}>
        <FormControl isRequired>
          <InputGroup>
            <Input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder="project name"
              type="text"
            />
          </InputGroup>
        </FormControl>
        <FormControl my="5px" isRequired>
          <InputGroup>
            <Textarea
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              placeholder="about project"
              spellCheck={"true"}
            />
          </InputGroup>
        </FormControl>
        <Button
          isLoading={isLoading}
          loadingText="Creating"
          w="100%"
          type="submit"
        >
          Create
        </Button>
      </form>
    </Box>
  );
};