import type { AppProps } from "next/app";
import {
  Flex,
  Box,
  useColorModeValue,
  ChakraProvider,
  useColorMode,
} from "@chakra-ui/react";

import { SidebarMenuDrawerProvider } from "contexts/SidebarMenuDrawerContext";
import { SidebarMenu } from "components/SidebarMenu";

import { theme } from "styles/theme";

function App({ Component, pageProps }: AppProps) {
  // Tentar entender pq não funciona modificar a cor de fundo da página ao mudar o tema para light ou dark

  return (
    <ChakraProvider theme={theme}>
      <SidebarMenuDrawerProvider>
        <Flex w="100vw" h="100vh">
          <SidebarMenu />
          <Box
            as="main"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flex={1}
            w="100%"
          >
            <Component {...pageProps} />
          </Box>
        </Flex>
      </SidebarMenuDrawerProvider>
    </ChakraProvider>
  );
}

export default App;
