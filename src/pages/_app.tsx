import type { AppProps } from "next/app";
import { Flex, Icon, ChakraProvider } from "@chakra-ui/react";

import { SidebarMenuDrawerProvider } from "contexts/SidebarMenuDrawerContext";
import { SidebarMenu } from "components/SidebarMenu";

import { theme } from "styles/theme";
import "styles/main.css";

function App({ Component, pageProps }: AppProps) {
  // TODO: Try to understand why it does not work to modify the background color of the page when changing the theme to light or dark

  return (
    <ChakraProvider theme={theme}>
      <SidebarMenuDrawerProvider>
        <Flex>
          <SidebarMenu />
          <Flex as="main" alignItems="center" justifyContent="center" flex={1}>
            <Component {...pageProps} />
          </Flex>
        </Flex>
      </SidebarMenuDrawerProvider>
    </ChakraProvider>
  );
}

export default App;
