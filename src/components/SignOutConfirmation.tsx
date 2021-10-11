import { useContext, useRef } from "react";
import {
  AlertDialog,
  Button,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/react";

import { AuthContext } from "../contexts";

type SignOutConfirmationDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function SignOutConfirmationDialog({
  isOpen,
  onClose,
}: SignOutConfirmationDialogProps) {
  const closeButtonRef = useRef();
  const { signOut } = useContext(AuthContext);

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={closeButtonRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Sair
          </AlertDialogHeader>

          <AlertDialogBody>Tem certeza que quer sair?</AlertDialogBody>

          <AlertDialogFooter>
            <Button
              ref={closeButtonRef}
              onClick={onClose}
              variant="ghost"
              colorScheme="blackAlpha"
            >
              Não
            </Button>
            <Button colorScheme="red" onClick={signOut} ml={3}>
              Sim
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
