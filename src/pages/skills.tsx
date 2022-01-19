import type { NextPage, GetStaticProps } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";
import {
  Text,
  Heading,
  Flex,
  IconButton,
  Icon,
  useMediaQuery,
} from "@chakra-ui/react";
import { BiMenuAltLeft } from "react-icons/bi";

// import { ThemeSwitcher } from "components/ThemeSwitcher";
import { useSidebarMenuDrawer } from "contexts/SidebarMenuDrawerContext";

import { supabase } from "services/supabase";

const Skills: NextPage = ({ programmingSkills, error }) => {
  const { onOpen } = useSidebarMenuDrawer();

  const [isToShowOpenMenuButton] = useMediaQuery("(max-width: 800px)");

  console.log({ programmingSkills, error });

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
        {isToShowOpenMenuButton && (
          <IconButton
            aria-label="Open menu"
            icon={<Icon as={BiMenuAltLeft} />}
            fontSize="30"
            mr="2"
            color="white"
            variant="unstyled"
            top="3"
            left="3"
            position="absolute"
            onClick={onOpen}
          />
        )}
        <Heading>Skills</Heading>
        {/* <ThemeSwitcher position="absolute" top="1.5" right="6" /> */}
      </Flex>
    </>
  );
};

export default Skills;

export const getStaticProps: GetStaticProps = async () => {
  const { data: programmingSkills, error } = await supabase
    .from("programming_skills")
    .select("*");

  console.log({ programmingSkills });

  return {
    props: {
      programmingSkills,
      error,
    },
    revalidate: 60 * 60 * 3, // = 3 horas
  };
};
