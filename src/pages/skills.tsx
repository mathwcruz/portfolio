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

  // TODO: Add transitions and effects;

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
        <Flex mt="50px" alignSelf="flex-start" flexDirection="column">
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
          w="70%"
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
          ]}
          alignItems="center"
          justifyContent="center"
        >
          {programmingSkills?.map((skill) => (
            <Flex
              key={skill?.id}
              alignItems="center"
              justifyContent="flex-start"
              gap="6"
              p="4"
              border="solid"
              borderWidth="2px"
              borderRadius="md"
              borderColor="gray.300"
              _hover={{ borderColor: "white" }}
            >
              <Image
                alt={skill?.name}
                src={skill?.icon}
                title={skill?.name}
                height={["65px", "70px", "75px", "85px"]}
                width={["65px", "70px", "75px", "85px"]}
              />
              <Flex
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                w="100%"
                gap="8px"
              >
                <Text
                  fontSize={["md", "lg"]}
                  fontWeight="semibold"
                  color="gray.100"
                  textAlign="start"
                  alignSelf="start"
                >
                  {skill?.name}
                </Text>
                <Progress
                  value={skill?.proficiency}
                  title="Proficiency"
                  max={100}
                  min={1}
                  size="sm"
                  width="100%"
                  bg="white"
                  borderRadius="lg"
                  colorScheme="custom"
                />
              </Flex>
            </Flex>
          ))}
        </Grid>
      </Flex>
    </>
  );
};

export default Skills;

export const getStaticProps: GetStaticProps = async () => {
  const { data, error } = await supabase
    .from("programming_skills")
    .select("*")
    .order("id", { ascending: true });

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
