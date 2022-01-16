import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Text, Heading, Flex } from "@chakra-ui/react";

import { ThemeSwitcher } from "components/ThemeSwitcher";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Matheus da Cruz</title>
      </Head>

      <Flex
        w="100%"
        h="100%"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        position="relative"
      >
        <Heading>Título</Heading>
        <Text fontSize="xl">Apaixonado por economia</Text>
        <ThemeSwitcher position="absolute" top="1.5" right="6" />
      </Flex>
    </>
  );
};

export default Home;
