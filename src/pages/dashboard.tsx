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
import { useRouter } from "next/router";
import { useMemo } from "react";

const hashRoutes = ["#tarefas", "#estudantes"];

function Dashboard() {
  const { push, asPath } = useRouter();

  function handlePushHashRoute(index: number) {
    push({ hash: hashRoutes[index] });
  }

  const initialTabIndex = useMemo(() => {
    const [hashRoute] = asPath.match(/#([a-z0-9]+)/gi) || [];

    const tabIndex = hashRoutes.findIndex((route) => route === hashRoute);
    const isValidIndex = tabIndex >= 0;

    return isValidIndex ? tabIndex : 0;
  }, [asPath]);

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <MainContainer>
        <Flex as="header" justify="end">
          <Profile />
        </Flex>

        <Tabs
          isLazy
          onChange={handlePushHashRoute}
          defaultIndex={initialTabIndex}
        >
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
