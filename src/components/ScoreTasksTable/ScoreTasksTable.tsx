import { Table, Tbody, Thead, Tr, Th } from "@chakra-ui/react";

import { ScoreTaskRow } from ".";

type Task = {
  id: number;
  title: string;
  reward: number;
  isEnabled: true;
  createdAt: string;
};

type ScoreTaskTableProps = {
  tasksDone: Task[];
  tasksPending: Task[];
};

export function ScoreTaskTable({
  tasksDone,
  tasksPending,
}: ScoreTaskTableProps) {
  return (
    <Table colorScheme="blackAlpha">
      <Thead>
        <Tr>
          <Th>Tarefa</Th>
          <Th>Status</Th>
          <Th>Recompensa</Th>
          <Th />
        </Tr>
      </Thead>
      <Tbody>
        {tasksPending.map((task) => {
          return (
            <ScoreTaskRow
              key={task.id}
              title={task.title}
              reward={task.reward}
              status="pending"
            />
          );
        })}
        {tasksDone.map((task) => {
          return (
            <ScoreTaskRow
              key={task.id}
              title={task.title}
              reward={task.reward}
              status="done"
            />
          );
        })}
      </Tbody>
    </Table>
  );
}
