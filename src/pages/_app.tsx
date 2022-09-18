import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { SidebarMenuDrawerProvider } from "contexts/SidebarMenuDrawerContext";
import { SidebarMenu } from "components/SidebarMenu";

import { theme } from "styles/theme";
import "styles/global.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarMenuDrawerProvider>
        <SidebarMenu />
        <Component {...pageProps} />
      </SidebarMenuDrawerProvider>
    </ChakraProvider>
  );
}

export default App;
