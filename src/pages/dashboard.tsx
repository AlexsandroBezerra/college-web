import { Flex } from "@chakra-ui/react";
import Head from "next/head";

import { MainContainer, Profile } from "../components";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <MainContainer>
        <Flex as="header" justify="end">
          <Profile />
        </Flex>
      </MainContainer>
    </>
  );
}
