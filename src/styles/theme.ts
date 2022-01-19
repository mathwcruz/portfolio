import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    black: "#121212",
    blue: {
      "600": "#2C4FDB",
    },
  },
  fonts: {
    heading: "Overpass",
    body: "Raleway",
  },
  styles: {
    global: {
      body: {
        bg: "black",
        color: "blue.600",
      },
    },
  },
});
