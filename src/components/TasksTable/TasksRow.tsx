import { DeleteIcon } from "@chakra-ui/icons";
import { Button, Text, Tr, Td, useDisclosure } from "@chakra-ui/react";
import { DeleteTaskConfirmation } from "../DeleteTaskConfirmation";

type TasksRowProps = {
  id: number;
  title: string;
  reward: number;
  createdAt: string;
};

export function TasksRow({ id, title, reward, createdAt }: TasksRowProps) {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Tr transition="0.2s" cursor="pointer" _hover={{ bg: "gray.200" }}>
      <Td>
        <Text fontWeight="bold">{title}</Text>
      </Td>
      <Td>{reward} pontos</Td>
      <Td>{new Date(createdAt).toLocaleString()}</Td>
      <Td isNumeric>
        <Button
          leftIcon={<DeleteIcon />}
          colorScheme="red"
          size="sm"
          onClick={onOpen}
        >
          Excluir tarefa
        </Button>
      </Td>

      <DeleteTaskConfirmation
        isOpen={isOpen}
        onClose={onClose}
        taskName={title}
        taskId={id}
      />
    </Tr>
  );
}
