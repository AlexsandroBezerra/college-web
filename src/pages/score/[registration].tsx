import {
  Box,
  Button,
  Flex,
  Heading,
  Table,
  Tbody,
  Thead,
  Tr,
  Th,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Head from "next/head";

import { MainContainer, ScoreTaskRow, TotalScore } from "../../components";

export default function Score() {
  const { query, push } = useRouter();

  function handleBackToLogin() {
    push("/");
  }

  return (
    <>
      <Head>
        <title>Score | Alexsandro Gomes Bezerra</title>
      </Head>

      <MainContainer>
        <Text fontSize="xx-large">Olá, Alexsandro Gomes Bezerra!</Text>
        <Text fontSize="xl">Matrícula: {query.registration}</Text>

        <Flex justify="center">
          <TotalScore score={8} />
        </Flex>

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

        <Flex my="2rem" justify="center">
          <Button size="lg" onClick={handleBackToLogin}>
            Voltar para o início
          </Button>
        </Flex>
      </MainContainer>
    </>
  );
}
