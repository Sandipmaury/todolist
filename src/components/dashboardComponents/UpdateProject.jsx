import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Textarea,
  Tooltip,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateProject } from "../../redux/ProjectReducer/actions";

export const UpdateProject = ({ project }) => {
  const isLoading = useSelector((store) => store.ProjectReducer.isLoading);
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const dispatch = useDispatch();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setTitle(project?.title);
    setAbout(project?.about);
  }, [project?.title, project?.about]);

  // project form handler
  const formHandler = (event) => {
    event.preventDefault();
    dispatch(updateProject(project._id, { title: title, about: about })).then(
      () => {
        toast({
          title: "Project updated.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        onClose();
      }
    );
  };
  return (
    <>
      <Tooltip hasArrow label="Edit Project" fontSize="md">
        <Button
          size={["xs", "sm", "md", "md"]}
          isLoading={isLoading}
          onClick={onOpen}
        >
          <AiFillEdit />
        </Button>
      </Tooltip>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Update your Project info</DrawerHeader>

          <DrawerBody>
            <form onSubmit={(e) => formHandler(e)}>
              <FormControl isRequired>
                <FormLabel>Title</FormLabel>
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
                <FormLabel>About</FormLabel>
                <InputGroup>
                  <Textarea
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    placeholder="about project"
                    spellCheck={"true"}
                    minHeight={40}
                  />
                </InputGroup>
              </FormControl>
              <Button
                isLoading={isLoading}
                loadingText="Updating"
                w="100%"
                type="submit"
              >
                Update
              </Button>
            </form>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
