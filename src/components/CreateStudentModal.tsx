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

type CreateStudentModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type CreateStudentFormData = {
  name: string;
  registration: string;
};

const TWO_SECONDS = 2000;

export function CreateStudentModal({
  onClose,
  isOpen,
}: CreateStudentModalProps) {
  const { register, handleSubmit, reset } = useForm();
  const { mutate } = useSWRConfig();
  const toast = useToast();

  const handleCreateStudent = handleSubmit(
    async ({ registration, name }: CreateStudentFormData) => {
      try {
        await api.post("students", {
          registration: Number(registration),
          name,
        });
        onClose();
        toast({
          title: "Estudante cadastrado",
          description: "Estudante cadastrado com sucesso.",
          status: "success",
          duration: TWO_SECONDS,
          position: "top-right",
        });
        reset();
        mutate("students");
      } catch {
        toast({
          title: "Erro!",
          description: "Erro ao cadastrar estudante, tente novamente.",
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
      <ModalContent as="form" onSubmit={handleCreateStudent}>
        <ModalHeader>Criar tarefa</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Matrícula</FormLabel>
            <Input
              autoFocus
              placeholder="Matrícula"
              type="number"
              {...register("registration", { required: true })}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Nome</FormLabel>
            <Input
              placeholder="Nome"
              {...register("name", { required: true })}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button onClick={onClose} colorScheme="red" mr={3}>
            Descartar
          </Button>
          <Button colorScheme="blue" type="submit">
            Salvar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
