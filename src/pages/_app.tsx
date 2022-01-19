import type { AppProps } from "next/app";
import { Flex, Box, Icon, ChakraProvider } from "@chakra-ui/react";

import { SidebarMenuDrawerProvider } from "contexts/SidebarMenuDrawerContext";
import { SidebarMenu } from "components/SidebarMenu";

import { theme } from "styles/theme";

function App({ Component, pageProps }: AppProps) {
  // TODO: Try to understand why it does not work to modify the background color of the page when changing the theme to light or dark

  return (
    <ChakraProvider theme={theme}>
      <SidebarMenuDrawerProvider>
        <Flex w="100vw">
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
