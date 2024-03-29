import { GetServerSideProps } from "next";
import Head from "next/head";
import { IconButton, Icon, useMediaQuery } from "@chakra-ui/react";
import { BiMenuAltLeft } from "react-icons/bi";

import { SummaryAboutMe } from "components/Texts/SummaryAboutMe";
import { useSidebarMenuDrawer } from "contexts/SidebarMenuDrawerContext";

import { api } from "services/api";

import { MotionFlex, animationFlex } from "styles/animation";

interface HomeProps {
  personalPicture: string;
  currentCompany?: string;
}

const Home = ({ personalPicture, currentCompany }: HomeProps) => {
  const { onOpen } = useSidebarMenuDrawer();

  const [isToShowOpenMenuButton] = useMediaQuery("(max-width: 800px)");

  return (
    <>
      <Head>
        <title>Matheus da Cruz</title>
      </Head>

      <MotionFlex
        w="100%"
        h="100vh"
        px="5"
        pb="5"
        pt={!isToShowOpenMenuButton ? "120px" : "5"}
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
        <SummaryAboutMe
          personalPicture={personalPicture}
          currentCompany={currentCompany}
        />
      </MotionFlex>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get(process.env.API_URL);

  return {
    props: {
      personalPicture: data?.avatar_url,
      currentCompany: data?.company,
    },
  };
};
