import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Heading,
  Spacer,
  Table,
  Tbody,
  Thead,
  Tr,
  Th,
  useDisclosure,
} from "@chakra-ui/react";

import { TasksRow } from ".";
import { CreateTaskModal } from "..";

export function TasksTable() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex my="1rem">
        <Heading>Tarefas criadas</Heading>
        <Spacer />
        <Button leftIcon={<AddIcon />} onClick={onOpen}>
          Criar tarefa
        </Button>
      </Flex>

      <CreateTaskModal isOpen={isOpen} onClose={onClose} />

      <Table colorScheme="blackAlpha">
        <Thead>
          <Tr>
            <Th>Título</Th>
            <Th>Recompensa</Th>
            <Th />
          </Tr>
        </Thead>
        <Tbody>
          <TasksRow title="Tarefa #05" reward={5} />
          <TasksRow title="Tarefa #04" reward={5} />
          <TasksRow title="Tarefa #03" reward={5} />
          <TasksRow title="Tarefa #02" reward={5} />
          <TasksRow title="Tarefa #01" reward={5} />
        </Tbody>
      </Table>
    </>
  );
}
