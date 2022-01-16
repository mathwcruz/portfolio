import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    black: "#0D0D0D",
    blue: {
      "600": "#2C4FDB",
    },
  },
  fonts: {
    heading: "Overpass",
    body: "Raleway",
  },
});
