import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import {
  Text,
  Flex,
  IconButton,
  Icon,
  useMediaQuery,
  Image,
} from "@chakra-ui/react";
import { BiMenuAltLeft } from "react-icons/bi";

// import { ThemeSwitcher } from "components/ThemeSwitcher";
import { AboutMe } from "components/Texts/AboutMe";
import { useSidebarMenuDrawer } from "contexts/SidebarMenuDrawerContext";
import { api } from "services/api";
import { supabase } from "services/supabase";

type Experience = {
  id: string;
  companyName: string;
  companyWebsiteUrl: string;
  position: string;
  technologies: string[];
  experiencePeriod: string;
};

type Graduation = {
  id: string;
  institution: string;
  institutionWebsiteUrl: string;
  course: string;
  graduationPeriod: string;
};

type Education = {
  id: string;
  institution: string;
  institutionWebsiteUrl: string;
  name: string;
  educationPeriod: string;
};

interface AboutProps {
  avatarUrl: string;
  currentCompany: string;
  experience: Experience[];
  graduations: Graduation[];
  education: Education[];
  totalProjectsCount: number;
}

const About: NextPage = ({
  avatarUrl,
  currentCompany,
  experience,
  graduations,
  education,
  totalProjectsCount,
}: AboutProps) => {
  const { onOpen } = useSidebarMenuDrawer();

  console.log({
    avatarUrl,
    currentCompany,
    experience,
    graduations,
    education,
    totalProjectsCount,
  });

  const [isToShowOpenMenuButton] = useMediaQuery("(max-width: 800px)");
  const [isToShowTabsInformation] = useMediaQuery("(max-width: 950px)");
  const [isToGroupImageAndText] = useMediaQuery("(min-width: 1000px)");

  return (
    <>
      <Head>
        <title>Matheus da Cruz</title>
      </Head>
      {/* TODO: resolve height fixed problem */}

      <Flex
        w="100%"
        h="100%"
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
        <Image
          borderRadius={!isToGroupImageAndText && "md"}
          borderLeftRadius={isToGroupImageAndText && "md"}
          boxSize={["180px", "250px", "300px", "340px"]}
          src={avatarUrl}
          alt="Matheus da Cruz"
        />
        <AboutMe totalProjectsCount={totalProjectsCount} />
        {/* TODO: in mobile version, create tabs that will change the content between experience, education and graduations */}
        {/* <ThemeSwitcher position="absolute" top="1.5" right="6" /> */}
      </Flex>
    </>
  );
};

export default About;

export const getStaticProps: GetStaticProps = async () => {
  // profile data
  const { data: profile } = await api.get(process.env.API_URL);

  // experience data
  const { data: experience_data, error: experienceError } = await supabase
    .from("experience")
    .select("*");

  const experience = experience_data?.map((ex) => {
    return {
      id: ex?.id,
      companyName: ex?.company_name,
      companyWebsiteUrl: ex?.company_website_url,
      position: ex?.position,
      technologies: ex?.technologies,
      experiencePeriod: ex?.experience_period,
    };
  });

  // graduations data
  const { data: graduations_data, error: graduationsError } = await supabase
    .from("graduations")
    .select("*");

  const graduations = graduations_data?.map((graduation) => {
    return {
      id: graduation?.id,
      institution: graduation?.institution,
      institutionWebsiteUrl: graduation?.institution_website_url,
      course: graduation?.course,
      graduationPeriod: graduation?.graduation_period,
    };
  });

  // education data
  const { data: education_data, error: educationError } = await supabase
    .from("education")
    .select("*");

  const education = education_data?.map((ed) => {
    return {
      id: ed?.id,
      institution: ed?.institution,
      institutionWebsiteUrl: ed?.institution_website_url,
      name: ed?.name,
      educationPeriod: ed?.education_period,
    };
  });

  // total projects developed
  const { data: allProjects, error: totalProjectsCountError } = await supabase
    .from("projects")
    .select("*");

  return {
    props: {
      avatarUrl: profile?.avatar_url,
      currentCompany: profile?.company,
      experience,
      graduations,
      education,
      totalProjectsCount: allProjects?.length,
    },
    revalidate: 60 * 60 * 3, // = 3 hour
  };
};
