import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

export const theme = extendTheme(
  withDefaultColorScheme({ colorScheme: "blue" }),
  {
    styles: {
      global: {
        body: {
          bg: "gray.50",
          color: "gray.900",
        },
      },
    },
  }
);
