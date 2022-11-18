import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { postFeedback } from "../../redux/AuthReducer/actions";

export const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const toast = useToast();

  // submitHandler
  const submitHandler = (e) => {
    e.preventDefault();
    postFeedback({ name: name, feedback: feedback }).then(() => {
      toast({
        title: "Thank you for your feedback 🙏.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setName("");
      setFeedback("");
    });
  };

  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <FormControl isRequired>
        <FormLabel color={"#ff8a82"}>Your Name</FormLabel>
        <Input
          onChange={(e) => setName(e.target.value)}
          placeholder="enter your name"
          type={"text"}
          value={name}
          color={"#484bf2"}
          border={"1px solid #484bf2"}
        />
      </FormControl>
      <FormControl mt={2} isRequired>
        <FormLabel color={"#ff8a82"}>Your Feedback</FormLabel>
        <Textarea
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="enter your feedback"
          type={"text"}
          value={feedback}
          color={"#484bf2"}
        />
        <Button mt={2} w={"100%"} type="submit">
          Submit
        </Button>
      </FormControl>
    </form>
  );
};
