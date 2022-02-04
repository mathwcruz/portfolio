import Head from "next/head";
import { Image, Icon, IconButton, useMediaQuery } from "@chakra-ui/react";
import { BiMenuAltLeft } from "react-icons/bi";

import { useSidebarMenuDrawer } from "contexts/SidebarMenuDrawerContext";
import { MotionFlex, animationFlex, itemAnimation } from "styles/animation";

export default function NotFound() {
  const { onOpen } = useSidebarMenuDrawer();

  const [isToShowOpenMenuButton] = useMediaQuery("(max-width: 800px)");

  return (
    <>
      <Head>
        <title>Matheus da Cruz</title>
      </Head>
      <MotionFlex
        alignItems="center"
        justifyContent="center"
        mx="auto"
        mt="0"
        px="10"
        w="100%"
        h="100vh"
        maxW="980px"
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
        <MotionFlex textAlign="center" variants={itemAnimation}>
          <Image
            alt="Page not found"
            src="/images/page-not-found.svg"
            boxSize="450px"
          />
        </MotionFlex>
      </MotionFlex>
    </>
  );
}
