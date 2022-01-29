/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { ApiError } from "@supabase/supabase-js";
import {
  Text,
  Heading,
  Flex,
  IconButton,
  Icon,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";
import { BiMenuAltLeft } from "react-icons/bi";

import { Breadcrumb } from "components/Breadcrumb";
import { useSidebarMenuDrawer } from "contexts/SidebarMenuDrawerContext";
import { supabase } from "services/supabase";
import { ProjectsTabs } from "components/Tabs/Projects";

const Portfolio: NextPage = () => {
  const { onOpen } = useSidebarMenuDrawer();

  const [isToShowOpenMenuButton] = useMediaQuery("(max-width: 800px)");

  const [projects, setProjects] = useState([]);

  useEffect(async () => {
    const { data: projects, error: projectError } = await supabase
      .from("projects")
      .select("*");

    setProjects(projects);
  }, []);

  // Slider controll
  const [tabIndex, setTabIndex] = useState<number>(0);

  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };

  // TODO: Add transitions and effects;

  return (
    <>
      <Head>
        <title>Matheus da Cruz</title>
      </Head>

      <Flex
        w="100%"
        h="100vh"
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
        <Box position="absolute" top="16" left="3">
          <Breadcrumb
            currentPage={
              tabIndex === 0
                ? "Personal"
                : tabIndex === 1
                ? "Learning"
                : "Professional"
            }
          />
        </Box>
        <Flex position="absolute" top="100" left="2" flexDirection="column">
          <Heading
            fontSize={["3xl", "4xl", "5xl", "6xl"]}
            color="blue.600"
            fontWeight="bold"
          >
            Projects
          </Heading>
          <Text
            pl={["0", "0", "2"]}
            mt={["0", "0", "-10px"]}
            fontSize={["lg", "lg", "xl"]}
            fontWeight="normal"
            color="gray.300"
          >
            that I had a significant participation in their development
          </Text>
        </Flex>
        <ProjectsTabs
          handleTabsChange={handleTabsChange}
          tabIndex={tabIndex}
          // projectTypeIndex={projectTypeIndex}
          allProjects={projects}
        />
      </Flex>
    </>
  );
};

export default Portfolio;
