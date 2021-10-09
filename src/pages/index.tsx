import { Heading } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello World Page</title>
      </Head>

      <Heading>Hello World!</Heading>
    </>
  );
}
