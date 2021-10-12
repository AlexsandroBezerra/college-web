import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Center,
  Stack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  useToast,
} from "@chakra-ui/react";
import {
  EmailIcon,
  ViewIcon,
  ViewOffIcon,
  LockIcon,
  ArrowBackIcon,
} from "@chakra-ui/icons";
import Head from "next/head";
import NextLink from "next/link";

import { AuthContext } from "../contexts";
import { withGuest } from "../hocs";

type SignInFormData = {
  email: string;
  password: string;
};

const THREE_SECONDS = 3000;

function Professor() {
  const { register, handleSubmit } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { signIn } = useContext(AuthContext);
  const toast = useToast();

  function toggleIsPasswordVisible() {
    setIsPasswordVisible((state) => !state);
  }

  const handleSignIn = handleSubmit(
    async ({ email, password }: SignInFormData) => {
      setIsLoading(true);

      try {
        await signIn({ email, password });
      } catch {
        setIsLoading(false);

        toast({
          title: "Credenciais inválidas",
          description: "A combinação email/senha está errada, tente novamente.",
          status: "error",
          duration: THREE_SECONDS,
          isClosable: true,
          position: "top-right",
        });
      }
    }
  );

  return (
    <>
      <Head>
        <title>Login | Professor</title>
      </Head>

      <Center height="100vh" flexDirection="column">
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
              {...register("email", { required: true })}
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
              {...register("password", { required: true })}
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

          <Button size="lg" type="submit" isLoading={isLoading}>
            Entrar
          </Button>
        </Stack>

        <NextLink href="/">
          <Link mt="8" colorScheme="blue">
            <ArrowBackIcon mx="2px" /> Voltar para aluno
          </Link>
        </NextLink>
      </Center>
    </>
  );
}

export default withGuest(Professor);
