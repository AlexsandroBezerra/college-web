import { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

type MainContainerProps = {
  children?: ReactNode;
};

export function MainContainer({ children }: MainContainerProps) {
  return (
    <Box mx="auto" py="2rem" maxW="container.xl">
      {children}
    </Box>
  );
}
