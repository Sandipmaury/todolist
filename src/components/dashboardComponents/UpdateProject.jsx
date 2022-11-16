import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  Input,
  InputGroup,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateProject } from "../../redux/ProjectReducer/actions";

export const UpdateProject = ({ project }) => {
  const isLoading = useSelector((store) => store.ProjectReducer.isLoading);
  const [title, setTitle] = useState(project?.title);
  const [about, setAbout] = useState(project?.about);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  // project form handler
  const formHandler = (event) => {
    event.preventDefault();
    dispatch(updateProject(project._id, { title: title, about: about }));
    onClose();
  };
  return (
    <>
      <Button
        size={["xs", "sm", "md", "md"]}
        isLoading={isLoading}
        cursor={"pointer"}
        onClick={onOpen}
      >
        <AiFillEdit />
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Update your Project info</DrawerHeader>

          <DrawerBody>
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
