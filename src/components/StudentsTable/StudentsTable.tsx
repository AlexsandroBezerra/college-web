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

import { StudentsRow } from ".";

export function StudentsTable() {
  return (
    <>
      <Flex my="1rem">
        <Heading>Alunos cadastrados</Heading>
        <Spacer />
        <Button leftIcon={<AddIcon />}>Cadastrar tarefa</Button>
      </Flex>

      <Table colorScheme="blackAlpha">
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Matricula</Th>
            <Th textAlign="center">Tarefas concluídas</Th>
            <Th textAlign="center">Pontuação atual</Th>
            <Th />
          </Tr>
        </Thead>
        <Tbody>
          <StudentsRow title="Aluno #05" reward={202104478402} />
          <StudentsRow title="Aluno #04" reward={202104478402} />
          <StudentsRow title="Aluno #03" reward={202104478402} />
          <StudentsRow title="Aluno #02" reward={202104478402} />
          <StudentsRow title="Aluno #01" reward={202104478402} />
        </Tbody>
      </Table>
    </>
  );
}
