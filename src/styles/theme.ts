import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

export const theme = extendTheme(
  withDefaultColorScheme({ colorScheme: "blue" }),
  {
    styles: {
      global: {
        body: {
          bg: "gray.100",
          color: "gray.900",
        },
      },
    },
  }
);
