import { useRef } from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Code,
  useToast,
} from "@chakra-ui/react";
import { api } from "../services/apiClient";
import { useSWRConfig } from "swr";

type DeleteTaskConfirmationProps = {
  isOpen: boolean;
  taskId: number;
  taskName: string;
  studentId: number;
  studentName: string;
  onClose: () => void;
  onCloseDrawer: () => void;
};

const THREE_SECONDS = 3 * 1000;

export function CreateTaskDoneConfirmation({
  isOpen,
  onClose,
  taskId,
  taskName,
  studentId,
  studentName,
  onCloseDrawer,
}: DeleteTaskConfirmationProps) {
  const closeButtonRef = useRef();
  const toast = useToast();
  const { mutate } = useSWRConfig();

  async function handleCreateTaskDone() {
    try {
      await api.post(`students/${studentId}/tasks`, { taskId });
      toast({
        title: "Tarefa feita!",
        description: `Tarefa feita por ${studentName}.`,
        status: "success",
        duration: THREE_SECONDS,
        position: "top-right",
      });
      onClose();
      onCloseDrawer();
      mutate("students");
      mutate(`studentTasks-${studentId}`);
    } catch {
      toast({
        title: "Erro!",
        description: "Erro ao concluir tarefa.",
        status: "error",
        duration: THREE_SECONDS,
        position: "top-right",
      });
    }
  }

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={closeButtonRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Concluir{" "}
            <Code colorScheme="blackAlpha" fontWeight="semibold">
              {taskName}
            </Code>
          </AlertDialogHeader>

          <AlertDialogBody>
            Você confirma que o{" "}
            <Code colorScheme="blackAlpha" fontWeight="semibold">
              {studentName}
            </Code>{" "}
            completou a tarefa{" "}
            <Code colorScheme="blackAlpha" fontWeight="semibold">
              {taskName}
            </Code>
            ?
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button
              ref={closeButtonRef}
              onClick={onClose}
              variant="ghost"
              colorScheme="red"
            >
              Não
            </Button>
            <Button onClick={handleCreateTaskDone} ml={3}>
              Sim
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
