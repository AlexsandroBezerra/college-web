import { useContext, useEffect } from "react";
import {
  Button,
  Center,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
} from "@chakra-ui/react";
import { ArrowForwardIcon, InfoIcon } from "@chakra-ui/icons";
import Head from "next/head";
import NextLink from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { RegistrationContext } from "../contexts";

type GetStudentScoreFormData = {
  registration: string;
};

export default function Home() {
  const { register, handleSubmit } = useForm<GetStudentScoreFormData>();
  const { push } = useRouter();
  const { setRegistration, clear } = useContext(RegistrationContext);

  useEffect(() => {
    clear();
  }, [clear]);

  const handleGetStudentScore = handleSubmit(({ registration }) => {
    setRegistration(Number(registration));
    push(`/score`);
  });

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <Center height="100vh" flexDirection="column">
        <Stack spacing={3} as="form" onSubmit={handleGetStudentScore}>
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
              {...register("registration", { required: true })}
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
