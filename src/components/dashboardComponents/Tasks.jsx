import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTasks } from "../../redux/TaskReducer/actions";
import { CompletedTask } from "./CompletedTask";
import { CreatedTask } from "./CreatedTask";
import { RunningTask } from "./RunningTask";

export const Tasks = ({ projectId }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (projectId) {
      dispatch(getTasks(projectId));
    }
  }, [projectId]);

  return (
    <Flex
      transition={"0.3s"}
      direction={["column", "column", "row", "row"]}
      p={2}
      gap={5}
    >
      <Box flex={1}>
        <CreatedTask projectId={projectId} />
      </Box>
      <Box flex={1}>
        <RunningTask projectId={projectId} />
      </Box>
      <Box flex={1}>
        <CompletedTask projectId={projectId} />
      </Box>
    </Flex>
  );
};
