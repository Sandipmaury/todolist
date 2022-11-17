import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormControl,
  Input,
  Select,
  Text,
  Textarea,
  Tooltip,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { GiRead } from "react-icons/gi";
import { BsCardHeading } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateTask } from "../../redux/TaskReducer/actions";
import { DeleteTask } from "./DeleteTask";

export const TaskInDetails = ({ projectId, taskId, onClose, isOpen }) => {
  const isLoading = useSelector((store) => store.TaskReducer.isLoading);
  const dispatch = useDispatch();
  const data = useSelector((store) => store.TaskReducer.data);
  const taskData = data?.data?.find((el) => el?._id === taskId);

  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [status, setStatus] = useState("");

  // form handler
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateTask(projectId, taskId, {
        title: title,
        discription: discription,
        status: status,
      })
    ).then(() => {
      setEdit(false);
      onClose();
    });
  };

  useEffect(() => {
    setTitle(taskData?.title);
    setDiscription(taskData?.discription);

    return () => {
      setTitle("");
      setDiscription("");
      setStatus(taskData?.status);
    };
  }, [isOpen]);

  return (
    <Drawer size={"md"} placement={"right"} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">
          <Flex gap={5} alignItems={"center"}>
            <Text>Your Task</Text>
            <Tooltip
              hasArrow
              label={edit ? "Go to Read Mode" : "Go to Edit Mode"}
            >
              <Box onClick={() => setEdit(!edit)} cursor={"pointer"}>
                {edit ? <AiFillEdit /> : <GiRead />}
              </Box>
            </Tooltip>
            <DeleteTask projectId={projectId} taskId={taskId} />
          </Flex>
        </DrawerHeader>
        <DrawerBody>
          <form onSubmit={(e) => submitHandler(e)}>
            <Flex direction={"column"}>
              <Flex
                fontSize={"20px"}
                fontWeight={"medium"}
                gap={2}
                alignItems={"center"}
              >
                <BsCardHeading />
                <Text>Title</Text>
              </Flex>
              {edit ? (
                <FormControl isRequired>
                  <Input
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    type={"text"}
                  />
                </FormControl>
              ) : (
                <Text pl={3}>{taskData?.title}</Text>
              )}
              <Flex
                fontSize={"20px"}
                fontWeight={"medium"}
                gap={2}
                alignItems={"center"}
                mt={2}
              >
                <BsCardHeading />
                <Text>Discription</Text>
              </Flex>
              {/* discription */}
              {edit ? (
                <FormControl isRequired>
                  <Textarea
                    onChange={(e) => setDiscription(e.target.value)}
                    value={discription}
                    type={"text"}
                  />
                </FormControl>
              ) : (
                <Text pl={3}>{taskData?.discription}</Text>
              )}
              {/* status */}
              <Flex
                fontSize={"20px"}
                fontWeight={"medium"}
                gap={2}
                alignItems={"center"}
                mt={2}
              >
                <BsCardHeading />
                <Text>Status</Text>
              </Flex>
              {edit ? (
                <FormControl isRequired>
                  <Select
                    isRequired
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value={"created"}>Created</option>
                    <option value={"running"}>Running</option>
                    <option value={"completed"}>Completed</option>
                  </Select>
                </FormControl>
              ) : (
                <Text pl={3}>{taskData?.status}</Text>
              )}
              {/* time and date */}
              <Box mt={3} fontSize={"12px"} fontWeight={"medium"}>
                <Text>Created At :- {taskData?.createdAt}</Text>
                <Text>Last Update:- {taskData?.updatedAt}</Text>
              </Box>
              {/* submit button */}
              {edit ? (
                <Flex mt={5} direction={"row-reverse"}>
                  <Button variant="outline" onClick={onClose}>
                    Cancel
                  </Button>
                  <Button
                    type={"submit"}
                    disabled={
                      title === taskData?.title &&
                      status === taskData?.status &&
                      discription === taskData?.discription
                    }
                    isLoading={isLoading}
                    mr={3}
                    colorScheme="blue"
                  >
                    Submit
                  </Button>
                </Flex>
              ) : null}
            </Flex>
          </form>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
