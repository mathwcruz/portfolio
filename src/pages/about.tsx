import type { NextPage, GetStaticProps } from "next";
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
import { api } from "services/api";

type Profile = {
  avatar_url: string;
  company: string;
};

interface AboutProps {
  profile: Profile;
}

const About: NextPage = ({ profile }: AboutProps) => {
  const { onOpen } = useSidebarMenuDrawer();

  console.log({ profile });

  const [isToShowOpenMenuButton] = useMediaQuery("(max-width: 800px)");

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
        <Heading>About</Heading>
        {/* <ThemeSwitcher position="absolute" top="1.5" right="6" /> */}
      </Flex>
    </>
  );
};

export default About;

export const getStaticProps: GetStaticProps = async () => {
  const { data: profile } = await api.get(process.env.API_URL);

  return {
    props: {
      profile,
    },
    revalidate: 60 * 60 * 2, // = 2 horas
  };
};
