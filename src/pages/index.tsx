import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Text, Heading, Box } from "@chakra-ui/react";

import { ThemeSwitcher } from "components/ThemeSwitcher";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Matheus da Cruz</title>
      </Head>

      <Box position="relative">
        <Heading>Título</Heading>
        <Text fontSize="xl">Apaixonado por economia</Text>
        <ThemeSwitcher position="absolute" top="3" right="3" />
      </Box>
    </div>
  );
};

export default Home;
