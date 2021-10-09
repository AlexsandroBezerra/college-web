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
  Td,
  Badge,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import Head from "next/head";

import { MainContainer } from "../../components";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function Score() {
  const { query, push } = useRouter();

  function handleBackToLogin() {
    push("/");
  }

  return (
    <>
      <Head>
        <title>Score</title>
      </Head>

      <MainContainer>
        <Heading>Olá Alexsandro Gomes Bezerra!</Heading>
        <Heading as="h3" fontSize="xl">
          Matrícula: {query.registration}
        </Heading>

        <Flex justify="center">
          <Box
            my={8}
            textAlign="center"
            bg="gray.200"
            p="4"
            borderRadius="1rem"
          >
            <Text>Pontuação atual:</Text>
            <Heading mt="2">5</Heading>
          </Box>
        </Flex>

        <Table variant="simple" colorScheme="blackAlpha">
          <Thead>
            <Tr>
              <Th>Tarefa</Th>
              <Th>Status</Th>
              <Th isNumeric>Score</Th>
              <Th />
            </Tr>
          </Thead>
          <Tbody>
            <Tr transition="0.2s" cursor="pointer" _hover={{ bg: "gray.200" }}>
              <Td>Fazer app de gameficacão</Td>
              <Td>
                <Badge colorScheme="orange">Pendente</Badge>
              </Td>
              <Td isNumeric>3.0</Td>
              <Td isNumeric>
                <ChevronRightIcon w={6} h={6} />
              </Td>
            </Tr>
            <Tr transition="0.2s" cursor="pointer" _hover={{ bg: "gray.200" }}>
              <Td>AV1</Td>
              <Td>
                <Badge colorScheme="orange">Pendente</Badge>
              </Td>
              <Td isNumeric>4.0</Td>
              <Td isNumeric>
                <ChevronRightIcon w={6} h={6} />
              </Td>
            </Tr>
            <Tr transition="0.2s" cursor="pointer" _hover={{ bg: "gray.200" }}>
              <Td>AV2</Td>
              <Td>
                <Badge colorScheme="green">Feito</Badge>
              </Td>
              <Td isNumeric>5.0</Td>
              <Td isNumeric>
                <ChevronRightIcon w={6} h={6} />
              </Td>
            </Tr>
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
