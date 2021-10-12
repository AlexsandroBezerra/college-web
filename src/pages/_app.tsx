import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";

import { AuthProvider, RegistrationProvider } from "../contexts";
import { theme } from "../styles/theme";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <RegistrationProvider>
          <Component {...pageProps} />
        </RegistrationProvider>
      </AuthProvider>
    </ChakraProvider>
  );
}
