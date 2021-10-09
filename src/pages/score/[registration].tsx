import { Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Head from "next/head";

import { MainContainer, ScoreTaskTable, TotalScore } from "../../components";

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

        <ScoreTaskTable />

        <Flex my="2rem" justify="center">
          <Button size="lg" onClick={handleBackToLogin}>
            Voltar para o início
          </Button>
        </Flex>
      </MainContainer>
    </>
  );
}
