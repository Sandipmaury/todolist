import {
  Box,
  Button,
  FormControl,
  Input,
  InputGroup,
  Select,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProjectBorder } from "../../config/Borders";
import { createProject } from "../../redux/ProjectReducer/actions";

export const FormCreateProject = ({ isOpen, onToggle }) => {
  const isLoading = useSelector((store) => store.ProjectReducer.isLoading);
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const dispatch = useDispatch();
  const toast = useToast();

  // project form handler
  const formHandler = (event) => {
    event.preventDefault();
    dispatch(createProject({ title: title, about: about, type: type })).then(
      () => {
        toast({
          title: "Project created.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        onToggle();
      }
    );
  };

  useEffect(() => {
    if (!isOpen) {
      setAbout("");
      setTitle("");
    }
  }, [isOpen]);

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
        <FormControl isRequired>
          <Select
            isRequired
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value={""}>--select type--</option>
            <option value={"individual"}>Individual</option>
            <option value={"group"}>Group</option>
          </Select>
        </FormControl>
        <FormControl my={"5px"} isRequired>
          <Input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type={"datetime-local"}
            min={"2022-11-22T22:29"}
          />
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
