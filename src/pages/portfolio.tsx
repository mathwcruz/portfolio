/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useMemo } from "react";
import { NextPage } from "next";
import Head from "next/head";
import {
  Text,
  Heading,
  IconButton,
  Icon,
  useMediaQuery,
} from "@chakra-ui/react";
import { BiMenuAltLeft } from "react-icons/bi";

import { Breadcrumb } from "components/Breadcrumb";
import { useSidebarMenuDrawer } from "contexts/SidebarMenuDrawerContext";
import { ProjectsTabs } from "components/Tabs/Projects";

import { MotionFlex, animationFlex, itemAnimation } from "styles/animation";

const Portfolio: NextPage = () => {
  const { onOpen } = useSidebarMenuDrawer();

  const [isToShowOpenMenuButton] = useMediaQuery("(max-width: 800px)");
  const [isToChangeUiLayout] = useMediaQuery("(max-width: 1535px)");

  // Slider control
  const [tabIndex, setTabIndex] = useState<number>(0);

  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };

  const subtitle = useMemo(() => {
    if (tabIndex === 0)
      return "developed with the aim of practicing and refining technical skills";

    if (tabIndex === 1) return "developed with the aim of study and learning";

    if (tabIndex === 2)
      return "developed for companies where I had an active role";
  }, [tabIndex]);

  return (
    <>
      <Head>
        <title>Matheus da Cruz</title>
      </Head>

      <MotionFlex
        w="100%"
        h={!isToChangeUiLayout ? "100vh" : "100%"}
        pt="240px"
        px="5"
        pb="5"
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
          top={!isToShowOpenMenuButton ? "250" : "160"}
          left="2"
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
          top={!isToShowOpenMenuButton ? "140" : "70"}
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
            mt="-10px"
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
