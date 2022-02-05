/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useMemo } from "react";
import { NextPage, GetStaticProps } from "next";
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
  CircularProgress,
} from "@chakra-ui/react";
import { BiMenuAltLeft } from "react-icons/bi";

import { Breadcrumb } from "components/Breadcrumb";
import { useSidebarMenuDrawer } from "contexts/SidebarMenuDrawerContext";
import { ProjectsTabs } from "components/Tabs/Projects";
import { MotionFlex, animationFlex, itemAnimation } from "styles/animation";

const Portfolio: NextPage = () => {
  const { onOpen } = useSidebarMenuDrawer();

  const [isToShowOpenMenuButton] = useMediaQuery("(max-width: 800px)");

  const [projects, setProjects] = useState([]);

  // Slider controll
  const [tabIndex, setTabIndex] = useState<number>(0);

  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };

  const subtitle = useMemo(() => {
    if (tabIndex === 0)
      return "developed with the aim of improving technical skills";

    if (tabIndex === 1) return "developed in courses and tutorials";

    if (tabIndex === 2)
      return "that I had a significant participation in their development";
  }, [tabIndex]);

  const [heightValue, setHeightValue] = useState("100vh");

  useEffect(() => setTimeout(() => setHeightValue("100%"), 100), []);

  return (
    <>
      <Head>
        <title>Matheus da Cruz</title>
      </Head>

      <MotionFlex
        w="100%"
        h={heightValue}
        p="5"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        position="relative"
        initial="hidden"
        animate="visible"
        variants={animationFlex}
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
        <MotionFlex
          position="absolute"
          top="16"
          left="3"
          variants={itemAnimation}
        >
          <Breadcrumb
            currentPage={
              tabIndex === 0
                ? "Personal"
                : tabIndex === 1
                ? "Learning"
                : "Professional"
            }
          />
        </MotionFlex>
        <MotionFlex
          position="absolute"
          top="100"
          left="2"
          flexDirection="column"
          variants={itemAnimation}
        >
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
            {subtitle}
          </Text>
        </MotionFlex>
        <ProjectsTabs handleTabsChange={handleTabsChange} tabIndex={tabIndex} />
      </MotionFlex>
    </>
  );
};

export default Portfolio;
