import { useContext, useState } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { AuthContext } from "../contexts";
import { SignOutConfirmationDialog } from "./SignOutConfirmation";

export function Profile() {
  const { user } = useContext(AuthContext);
  const { isOpen, onClose, onOpen } = useDisclosure();

  if (!user) {
    return (
      <HStack spacing="1rem">
        <SkeletonCircle size="3rem" />
        <Stack textAlign="left" w="15rem">
          <SkeletonText noOfLines={1} w="80%" />
          <SkeletonText noOfLines={1} />
        </Stack>
      </HStack>
    );
  }

  return (
    <Menu>
      <MenuButton>
        <HStack spacing="1rem">
          <Avatar name={user?.name} size="md" />
          <Box textAlign="left">
            <Text fontWeight="bold">{user.name}</Text>
            <Text>{user.email}</Text>
          </Box>
          <ChevronDownIcon h={8} w={8} />
        </HStack>
      </MenuButton>

      <MenuList>
        <MenuItem onClick={onOpen}>Sair</MenuItem>
      </MenuList>

      <SignOutConfirmationDialog isOpen={isOpen} onClose={onClose} />
    </Menu>
  );
}
