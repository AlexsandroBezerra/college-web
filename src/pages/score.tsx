import { useCallback, useContext, useEffect } from "react";
import { Button, Flex, Text, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Head from "next/head";

import {
  MainContainer,
  ScoreTaskTable,
  TotalScore,
  LoadingPage,
} from "../components";
import { RegistrationContext } from "../contexts";
import { useStudentTasks } from "../hooks/useStudentTasks";

const TEN_SECONDS = 10 * 1000;

export default function Score() {
  const { push } = useRouter();
  const { registration } = useContext(RegistrationContext);
  const toast = useToast();

  const { studentTasks, isLoading, isError } = useStudentTasks(registration);

  const backToLogin = useCallback(() => {
    push("/");
  }, [push]);

  useEffect(() => {
    if (isError) {
      backToLogin();
      toast({
        title: "Matrícula inválida",
        description:
          "Não foi encontrado um estudante com a matrícula informada",
        status: "error",
        duration: TEN_SECONDS,
        isClosable: true,
        position: "top-right",
      });
    }
  }, [backToLogin, isError, toast]);

  if (isLoading || isError) {
    return <LoadingPage />;
  }

  return (
    <>
      <Head>
        <title>Score | {studentTasks.name}</title>
      </Head>

      <MainContainer>
        <Text fontSize="xx-large">Olá, {studentTasks.name}!</Text>
        <Text fontSize="xl">Matrícula: {studentTasks.id}</Text>

        <Flex justify="center">
          <TotalScore score={studentTasks.score} />
        </Flex>

        <ScoreTaskTable
          tasksDone={studentTasks.tasksDone}
          tasksPending={studentTasks.tasksPending}
        />

        <Flex my="2rem" justify="center">
          <Button size="lg" onClick={backToLogin}>
            Voltar para o início
          </Button>
        </Flex>
      </MainContainer>
    </>
  );
}
