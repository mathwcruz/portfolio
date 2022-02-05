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
    custom: {
      "100": "#2C4FDB",
      "200": "#2C4FDB",
      "300": "#2C4FDB",
      "400": "#2C4FDB",
      "500": "#2C4FDB",
      "600": "#2C4FDB",
      "700": "#2C4FDB",
      "800": "#2C4FDB",
      "900": "#2C4FDB",
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
