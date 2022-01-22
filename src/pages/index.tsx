import type { NextPage, getServerSideProps } from "next";
import Head from "next/head";
import { Flex, IconButton, Icon, Image, useMediaQuery } from "@chakra-ui/react";
import { BiMenuAltLeft } from "react-icons/bi";

// import { ThemeSwitcher } from "components/ThemeSwitcher";
import { SummaryAboutMe } from "components/Texts/SummaryAboutMe";
import { useSidebarMenuDrawer } from "contexts/SidebarMenuDrawerContext";
import { api } from "services/api";

interface HomeProps {
  personalPicture: string;
  currentCompany?: string;
}

const Home: NextPage = ({ personalPicture, currentCompany }: HomeProps) => {
  const { onOpen } = useSidebarMenuDrawer();

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
        <SummaryAboutMe
          personalPicture={personalPicture}
          currentCompany={currentCompany}
        />
        {/* <ThemeSwitcher position="absolute" top="1.5" right="6" /> */}
      </Flex>
    </>
  );
};

export default Home;

export const getServerSideProps: getServerSideProps = async () => {
  const { data } = await api.get(process.env.API_URL);

  return {
    props: {
      personalPicture: data?.avatar_url,
      currentCompany: data?.company,
    },
  };
};
