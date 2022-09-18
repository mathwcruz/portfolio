import Document, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

import { theme } from "styles/theme";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Overpass:wght@400;500;600;700&family=Raleway:wght@300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <link
            rel="shortcut icon"
            href="/images/favicon.png"
            type="image/png"
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
