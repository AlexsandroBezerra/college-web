import { Table, Tbody, Thead, Tr, Th } from "@chakra-ui/react";

import { ScoreTaskRow } from ".";

export function ScoreTaskTable() {
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
        <ScoreTaskRow title="Tarefa #05" reward={2} status="pending" />
        <ScoreTaskRow title="Tarefa #04" reward={2} status="pending" />
        <ScoreTaskRow title="Tarefa #03" reward={2} status="pending" />
        <ScoreTaskRow title="Tarefa #02" reward={2} status="done" />
        <ScoreTaskRow title="Tarefa #01" reward={2} status="done" />
      </Tbody>
    </Table>
  );
}
