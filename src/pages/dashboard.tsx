import {
  Flex,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import Head from "next/head";

import { withAuth } from "../hocs";
import {
  MainContainer,
  Profile,
  TasksTable,
  StudentsTable,
} from "../components";

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
            <Tab>Estudantes</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TasksTable />
            </TabPanel>
            <TabPanel>
              <StudentsTable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </MainContainer>
    </>
  );
}

export default withAuth(Dashboard);
