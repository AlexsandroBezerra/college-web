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
  onClose: () => void;
};

const TWO_SECONDS = 2000;

export function DeleteTaskConfirmation({
  isOpen,
  onClose,
  taskId,
  taskName,
}: DeleteTaskConfirmationProps) {
  const closeButtonRef = useRef();
  const toast = useToast();
  const { mutate } = useSWRConfig();

  async function handleDeleteTask() {
    try {
      await api.delete(`tasks/${taskId}`);
      toast({
        title: "Tarefa excluída",
        description: "Tarefa excluída com sucesso.",
        status: "success",
        duration: TWO_SECONDS,
        position: "top-right",
      });
      onClose();
      mutate("tasks");
    } catch {
      toast({
        title: "Erro!",
        description: "Erro ao excluir tarefa, tente novamente.",
        status: "error",
        duration: TWO_SECONDS,
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
            Excluir{" "}
            <Code colorScheme="blackAlpha" fontWeight="semibold">
              {taskName}
            </Code>
          </AlertDialogHeader>

          <AlertDialogBody>
            Tem certeza que quer excluir a tarefa? Ao excluir todos os alunos
            que fizeram essa tarefa terá os pontos perdidos.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button
              ref={closeButtonRef}
              onClick={onClose}
              variant="ghost"
              colorScheme="blackAlpha"
            >
              Não
            </Button>
            <Button colorScheme="red" onClick={handleDeleteTask} ml={3}>
              Sim
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
