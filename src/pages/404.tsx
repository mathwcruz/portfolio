import Head from "next/head";
import {
  Flex,
  Box,
  Image,
  Icon,
  IconButton,
  useMediaQuery,
} from "@chakra-ui/react";
import { BiMenuAltLeft } from "react-icons/bi";

import { useSidebarMenuDrawer } from "contexts/SidebarMenuDrawerContext";

export default function NotFound() {
  const { onOpen } = useSidebarMenuDrawer();

  const [isToShowOpenMenuButton] = useMediaQuery("(max-width: 800px)");

  return (
    <>
      <Head>
        <title>Matheus da Cruz</title>
      </Head>
      <Flex
        alignItems="center"
        justifyContent="center"
        mx="auto"
        mt="0"
        px="10"
        w="100%"
        h="100vh"
        maxW="980px"
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
        <Box textAlign="center">
          <Image
            alt="Page not found"
            src="/images/page-not-found.svg"
            boxSize="450px"
          />
        </Box>
      </Flex>
    </>
  );
}
