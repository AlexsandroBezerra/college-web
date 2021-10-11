import { DeleteIcon } from "@chakra-ui/icons";
import { Button, Text, Tr, Td } from "@chakra-ui/react";

type TasksRowProps = {
  title: string;
  reward: number;
};

export function TasksRow({ title, reward }: TasksRowProps) {
  return (
    <Tr transition="0.2s" cursor="pointer" _hover={{ bg: "gray.200" }}>
      <Td>
        <Text fontWeight="bold">{title}</Text>
      </Td>
      <Td>{reward} pontos</Td>
      <Td isNumeric>
        <Button leftIcon={<DeleteIcon />} colorScheme="red" size="sm">
          Excluir tarefa
        </Button>
      </Td>
    </Tr>
  );
}
