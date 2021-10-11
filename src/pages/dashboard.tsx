import {
  Flex,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import Head from "next/head";

import { MainContainer, Profile, TasksTable } from "../components";
import { withAuth } from "../hocs";

function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <MainContainer>
        <Flex as="header" justify="end">
          <Profile />
        </Flex>

        <Tabs>
          <TabList>
            <Tab>Tarefas</Tab>
            <Tab>Alunos</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TasksTable />
            </TabPanel>
            <TabPanel>
              <p>Alunos!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </MainContainer>
    </>
  );
}

export default withAuth(Dashboard);
