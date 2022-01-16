import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Flex, Box, useColorModeValue } from "@chakra-ui/react";

import { SidebarMenuDrawerProvider } from "contexts/SidebarMenuDrawerContext";
import { SidebarMenu } from "components/SidebarMenu";
import { theme } from "styles/theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarMenuDrawerProvider>
        <Flex h="100vh">
          <SidebarMenu />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flex={1}
            as="main"
            bg="white"
          >
            <Component {...pageProps} />
          </Box>
        </Flex>
      </SidebarMenuDrawerProvider>
    </ChakraProvider>
  );
}

export default App;
