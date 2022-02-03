import type { AppProps } from "next/app";
import { Flex, Box, Icon, ChakraProvider } from "@chakra-ui/react";

import { SidebarMenuDrawerProvider } from "contexts/SidebarMenuDrawerContext";
import { SidebarMenu } from "components/SidebarMenu";

import { theme } from "styles/theme";
import "styles/global.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarMenuDrawerProvider>
        <Flex>
          <SidebarMenu />
          <Box as="main" flex={1}>
            <Component {...pageProps} />
          </Box>
        </Flex>
      </SidebarMenuDrawerProvider>
    </ChakraProvider>
  );
}

export default App;
