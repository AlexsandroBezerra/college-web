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

import { StudentsRow, Loader } from ".";
import { useStudents } from "../../hooks";
import { CreateStudentModal } from "../CreateStudentModal";

export function StudentsTable() {
  const { students, isLoading } = useStudents();
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <Flex my="1rem">
        <Heading>Estudantes cadastrados</Heading>
        <Spacer />
        <Button leftIcon={<AddIcon />} onClick={onOpen}>
          Cadastrar estudante
        </Button>
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

      <CreateStudentModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}
