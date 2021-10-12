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
import { useTasks } from "../../hooks";

export function TasksTable() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { tasks } = useTasks();

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
            <Th>Criada em</Th>
            <Th />
          </Tr>
        </Thead>
        <Tbody>
          {tasks?.map((task) => {
            return (
              <TasksRow
                key={task.id}
                id={task.id}
                title={task.title}
                reward={task.reward}
                createdAt={task.createdAt}
              />
            );
          })}
        </Tbody>
      </Table>
    </>
  );
}
