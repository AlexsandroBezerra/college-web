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

import { StudentsRow, Loader } from ".";
import { useStudents } from "../../hooks";

export function StudentsTable() {
  const { students, isLoading } = useStudents();

  return (
    <>
      <Flex my="1rem">
        <Heading>Estudantes cadastrados</Heading>
        <Spacer />
        <Button leftIcon={<AddIcon />}>Cadastrar estudante</Button>
      </Flex>

      <Table colorScheme="blackAlpha">
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Matricula</Th>
            <Th textAlign="center">Pontuação atual</Th>
            <Th />
          </Tr>
        </Thead>
        <Tbody>
          {isLoading ? (
            <Loader />
          ) : (
            students.map((student) => {
              return (
                <StudentsRow
                  id={student.id}
                  key={student.id}
                  name={student.name}
                  score={student.score}
                />
              );
            })
          )}
        </Tbody>
      </Table>
    </>
  );
}
