import { useRef } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  useToast,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { api } from "../services/apiClient";
import { useSWRConfig } from "swr";

type CreateTaskModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type CreateTaskFormData = {
  title: string;
  reward: string;
};

const TWO_SECONDS = 2000;

export function CreateTaskModal({ onClose, isOpen }: CreateTaskModalProps) {
  const { register, handleSubmit, reset } = useForm();
  const { mutate } = useSWRConfig();
  const toast = useToast();

  const handleCreateTask = handleSubmit(
    async ({ title, reward }: CreateTaskFormData) => {
      try {
        await api.post("tasks", { title, reward });
        onClose();
        toast({
          title: "Tarefa criada",
          description: "Tarefa criada com sucesso.",
          status: "success",
          duration: TWO_SECONDS,
          position: "top-right",
        });
        reset();
        mutate("tasks");
      } catch {
        toast({
          title: "Erro!",
          description: "Erro ao criar tarefa, tente novamente.",
          status: "error",
          duration: TWO_SECONDS,
          position: "top-right",
        });
      }
    }
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent as="form" onSubmit={handleCreateTask}>
        <ModalHeader>Criar tarefa</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Título</FormLabel>
            <Input
              autoFocus
              placeholder="Título"
              {...register("title", { required: true })}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Recompensa</FormLabel>
            <Input
              placeholder="Padrão: 2"
              type="number"
              {...register("reward", { required: true })}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button onClick={onClose} colorScheme="red" mr={3}>
            Cancel
          </Button>
          <Button colorScheme="blue" type="submit">
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
