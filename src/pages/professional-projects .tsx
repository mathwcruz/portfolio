import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { ApiError } from "@supabase/supabase-js";
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
import { supabase } from "services/supabase";

type ProfessionalProject = {
  id: string;
  name: string;
  type: string;
  banner: string;
  technologies: string[];
  description?: string;
  websiteUrl?: string;
  githubRepository?: string;
};

interface ProfessionalProjectsProps {
  professionalProjects: ProfessionalProject[];
  error: ApiError;
}

const ProfessionalProjects: NextPage = ({
  professionalProjects,
  error,
}: ProfessionalProjectsProps) => {
  const { onOpen } = useSidebarMenuDrawer();

  const [isToShowOpenMenuButton] = useMediaQuery("(max-width: 800px)");

  console.log({ professionalProjects });

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
        <Heading>ProfessionalProjects</Heading>
        {/* <ThemeSwitcher position="absolute" top="1.5" right="6" /> */}
      </Flex>
    </>
  );
};

export default ProfessionalProjects;

export const getStaticProps: GetStaticProps = async () => {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("type", "professional");

  const professionalProjects = data?.map((project) => {
    return {
      id: project?.id,
      name: project?.name,
      type: project?.type,
      banner: project?.banner,
      technologies: project?.technologies,
      description: project?.description,
      websiteUrl: project?.website_url,
      githubRepository: project?.github_repository,
    };
  });

  return {
    props: {
      professionalProjects,
      error,
    },
    revalidate: 60 * 60 * 3, // = 3 horas
  };
};
