import { FormEvent } from "react";
import {
  Button,
  Center,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
} from "@chakra-ui/react";
import { ArrowForwardIcon, EmailIcon, InfoIcon } from "@chakra-ui/icons";
import Head from "next/head";
import NextLink from "next/link";

export default function Home() {
  function handleSignIn(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <Center height="100vh" flexDirection="column">
        <Stack spacing={3} as="form" onSubmit={handleSignIn}>
          <InputGroup size="lg">
            <InputLeftElement pointerEvents="none">
              <InfoIcon color="gray.300" />
            </InputLeftElement>

            <Input
              type="number"
              placeholder="Matrícula"
              name="registration"
              isRequired
              autoFocus
            />
          </InputGroup>

          <Button size="lg" type="submit">
            Ver pontuação
          </Button>
        </Stack>

        <NextLink href="/professor">
          <Link mt="8" colorScheme="blue">
            Entrar como professor <ArrowForwardIcon mx="2px" />
          </Link>
        </NextLink>
      </Center>
    </>
  );
}
