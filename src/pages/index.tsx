import { FormEvent, useState } from "react";
import {
  Button,
  Flex,
  Stack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
} from "@chakra-ui/react";
import {
  ArrowForwardIcon,
  EmailIcon,
  ViewIcon,
  ViewOffIcon,
  LockIcon,
} from "@chakra-ui/icons";
import Head from "next/head";
import NextLink from "next/link";

export default function Home() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function toggleIsPasswordVisible() {
    setIsPasswordVisible((state) => !state);
  }

  function handleSignIn(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <>
      <Head>
        <title>Hello World Page</title>
      </Head>

      <Flex align="center" justify="center" height="100vh" direction="column">
        <Stack spacing={3} as="form" onSubmit={handleSignIn}>
          <InputGroup size="lg">
            <InputLeftElement pointerEvents="none">
              <EmailIcon color="gray.300" />
            </InputLeftElement>

            <Input
              type="email"
              placeholder="Email"
              name="email"
              isRequired
              autoFocus
            />
          </InputGroup>

          <InputGroup size="lg">
            <InputLeftElement pointerEvents="none">
              <LockIcon color="gray.300" />
            </InputLeftElement>

            <Input
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Senha"
              name="password"
              isRequired
            />

            <InputRightElement width="3rem">
              <IconButton
                aria-label="Mostrar ou esconder senha"
                h="1.75rem"
                size="sm"
                onClick={toggleIsPasswordVisible}
                icon={isPasswordVisible ? <ViewOffIcon /> : <ViewIcon />}
              />
            </InputRightElement>
          </InputGroup>

          <Button size="lg" type="submit">
            Entrar como professor
          </Button>
        </Stack>

        <NextLink href="/">
          <Link mt="8" colorScheme="blue">
            Entrar como aluno <ArrowForwardIcon mx="2px" />
          </Link>
        </NextLink>
      </Flex>
    </>
  );
}
