import { ChevronRightIcon } from "@chakra-ui/icons";
import { Text, Tr, Td, useDisclosure } from "@chakra-ui/react";

import { TasksDrawer } from "../TasksDrawer";

type StudentsRowProps = {
  id: number;
  name: string;
  score: number;
};

export function StudentsRow({ id, name, score }: StudentsRowProps) {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Tr
      transition="0.2s"
      cursor="pointer"
      _hover={{ bg: "gray.200" }}
      onClick={onOpen}
    >
      <Td>
        <Text fontWeight="bold">{name}</Text>
      </Td>
      <Td>{id}</Td>
      <Td textAlign="center">{score} pontos</Td>
      <Td isNumeric>
        <ChevronRightIcon w={6} h={6} />
      </Td>

      <TasksDrawer
        isOpen={isOpen}
        onClose={onClose}
        studentName={name}
        studentId={id}
      />
    </Tr>
  );
}
