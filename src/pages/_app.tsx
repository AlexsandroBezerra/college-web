import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";

import { AuthProvider } from "../contexts";
import { theme } from "../styles/theme";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}
