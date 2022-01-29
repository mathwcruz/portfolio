import type { NextPage, GetStaticProps } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";
import { ApiError } from "@supabase/supabase-js";
import {
  Text,
  Heading,
  Flex,
  IconButton,
  Icon,
  Grid,
  Image,
  Progress,
  useMediaQuery,
} from "@chakra-ui/react";
import { BiMenuAltLeft } from "react-icons/bi";

// import { ThemeSwitcher } from "components/ThemeSwitcher";
import { useSidebarMenuDrawer } from "contexts/SidebarMenuDrawerContext";

import { supabase } from "services/supabase";

type ProgrammingSkill = {
  id: number;
  name: string;
  proficiency: number;
  icon: string;
};

interface SkillsProps {
  programmingSkills: ProgrammingSkill[];
  error: ApiError;
}

const Skills: NextPage = ({ programmingSkills, error }: SkillsProps) => {
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
        h={["100%", "100%", "100%", "100%", "100vh"]}
        p="5"
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
        <Flex mt="10" alignSelf="flex-start" flexDirection="column">
          <Heading
            fontSize={["3xl", "4xl", "5xl", "6xl"]}
            color="blue.600"
            fontWeight="bold"
          >
            Skills
          </Heading>
          <Text
            mt="-10px"
            fontSize={["lg", "lg", "xl"]}
            fontWeight="normal"
            color="gray.300"
          >
            that I&apos;ve been developing and perfecting myself daily
          </Text>
        </Flex>
        <Grid
          gap="10"
          my="8"
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
          ]}
          alignItems="center"
          justifyContent="center"
        >
          {programmingSkills?.map((skill) => (
            <Flex
              key={skill?.id}
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              gap="2"
              p={["9", "8", "7", "6"]}
              border="solid"
              borderWidth="2px"
              borderRadius="md"
              borderColor="gray.300"
              _hover={{ borderColor: "white" }}
            >
              <Image
                alt={skill?.name}
                src={skill?.icon}
                height={["70px", "85px", "90px", "105px"]}
                width={["70px", "85px", "90px", "105px"]}
              />
              <Text
                fontSize={["md", "lg", "xl"]}
                fontWeight="semibold"
                color="gray.100"
                textAlign="center"
              >
                {skill?.name}
              </Text>
              <Flex
                w="100%"
                gap="2"
                alignItems="center"
                justifyContent="center"
              >
                <Progress
                  value={skill?.proficiency}
                  max={100}
                  min={1}
                  size="sm"
                  width="100%"
                  bg="white"
                  borderRadius="lg"
                  colorScheme="cyan"
                />
                <Text
                  fontWeight="bold"
                  fontSize="smaller"
                  color="gray.100"
                >{`${skill?.proficiency}%`}</Text>
              </Flex>
            </Flex>
          ))}
        </Grid>
        {/* <ThemeSwitcher position="absolute" top="1.5" right="6" /> */}
      </Flex>
    </>
  );
};

export default Skills;

export const getStaticProps: GetStaticProps = async () => {
  const { data, error } = await supabase.from("programming_skills").select("*");

  const programmingSkills = data?.map((skill) => {
    return {
      id: skill?.id,
      name: skill?.name,
      proficiency: skill?.proficiency,
      icon: skill?.icon,
    };
  });

  return {
    props: {
      programmingSkills,
      error,
    },
    revalidate: 60 * 60 * 3, // = 3 horas
  };
};
