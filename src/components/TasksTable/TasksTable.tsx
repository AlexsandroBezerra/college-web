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
} from "@chakra-ui/react";

import { TasksRow } from ".";

export function TasksTable() {
  return (
    <>
      <Flex my="1rem">
        <Heading>Tarefas criadas</Heading>
        <Spacer />
        <Button leftIcon={<AddIcon />}>Criar tarefa</Button>
      </Flex>

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
