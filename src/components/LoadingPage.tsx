import Head from "next/head";
import { Center, Spinner } from "@chakra-ui/react";

export function LoadingPage() {
  return (
    <>
      <Head>
        <title>Carregando...</title>
      </Head>

      <Center h="100vh">
        <Spinner size="xl" />
      </Center>
    </>
  );
}
