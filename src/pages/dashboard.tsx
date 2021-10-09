import { useContext, useRef, useState } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";

import { MainContainer } from "../components/Main";
import { SignOutConfirmationDialog } from "../components/SignOutConfirmation";
import { AuthContext } from "../contexts";

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  const [isSignOutConfirmationOpen, setIsSignOutConfirmationOpen] =
    useState(false);

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <MainContainer>
        <Flex justify="end">
          <Menu>
            <MenuButton>
              <HStack spacing="1rem">
                <Avatar name={user?.name} />
                <Box textAlign="left">
                  <Text fontWeight="bold">{user?.name}</Text>
                  <Text>{user?.email}</Text>
                </Box>
                <ChevronDownIcon h={8} w={8} />
              </HStack>
            </MenuButton>

            <MenuList>
              <MenuItem onClick={() => setIsSignOutConfirmationOpen(true)}>
                Sair
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </MainContainer>

      <SignOutConfirmationDialog
        isOpen={isSignOutConfirmationOpen}
        onClose={() => setIsSignOutConfirmationOpen(false)}
      />
    </>
  );
}
