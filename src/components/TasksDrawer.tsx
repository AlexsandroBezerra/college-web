import {
  Button,
  Center,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerCloseButton,
  DrawerBody,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { CreateTaskDoneConfirmation } from ".";

import { useStudentTasks } from "../hooks";

type Task = {
  id: number;
  title: string;
  reward: number;
  isEnabled: true;
  createdAt: string;
};

type TasksDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  studentId: number;
  studentName: string;
};

export function TasksDrawer({
  isOpen,
  onClose,
  studentId,
  studentName,
}: TasksDrawerProps) {
  const [selectedTask, setSelectedTask] = useState<Task>();
  const { studentTasks, isLoading } = useStudentTasks(studentId);
  const {
    isOpen: isOpenConfirmation,
    onClose: onCloseConfirmation,
    onOpen,
  } = useDisclosure();

  function handleDoTask(task: Task) {
    onOpen();
    setSelectedTask(task);
  }

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Tarefas pendentes</DrawerHeader>

        <DrawerBody>
          {isLoading ? (
            <Center h="100%">
              <Spinner />
            </Center>
          ) : (
            studentTasks?.tasksPending.map((task) => {
              return (
                <Button
                  key={task.id}
                  variant="ghost"
                  display="block"
                  w="100%"
                  textAlign="left"
                  onClick={() => handleDoTask(task)}
                >
                  {task.title} - {task.reward} pontos
                </Button>
              );
            })
          )}
        </DrawerBody>
      </DrawerContent>

      <CreateTaskDoneConfirmation
        isOpen={isOpenConfirmation}
        onClose={onCloseConfirmation}
        onCloseDrawer={onClose}
        studentId={studentId}
        studentName={studentName}
        taskId={selectedTask?.id}
        taskName={selectedTask?.title}
      />
    </Drawer>
  );
}
