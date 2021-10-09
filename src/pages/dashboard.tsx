import { Flex } from "@chakra-ui/react";
import Head from "next/head";

import { MainContainer, Profile } from "../components";
import { withSSRAuth } from "../hocs";

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

export const getServerSideProps = withSSRAuth(async () => {
  return {
    props: {},
  };
});
