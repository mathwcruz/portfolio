import { GetStaticProps } from "next";
import Head from "next/head";
import {
  Text,
  Heading,
  IconButton,
  Icon,
  useMediaQuery,
} from "@chakra-ui/react";
import { BiMenuAltLeft } from "react-icons/bi";

import { useSidebarMenuDrawer } from "contexts/SidebarMenuDrawerContext";

import { supabase } from "services/supabase";

import {
  MotionFlex,
  MotionGrid,
  animationFlex,
  itemAnimation,
  MotionImage,
} from "styles/animation";

type ProgrammingSkill = {
  id: number;
  name: string;
  icon: string;
};

interface SkillsProps {
  programmingSkills: ProgrammingSkill[];
}

const Skills = ({ programmingSkills }: SkillsProps) => {
  const { onOpen } = useSidebarMenuDrawer();

  const [isToShowOpenMenuButton] = useMediaQuery("(max-width: 800px)");

  return (
    <>
      <Head>
        <title>Matheus da Cruz</title>
      </Head>

      <MotionFlex
        w="100%"
        h={["100%", "100%", "100%", "100vh", "100vh"]}
        p="5"
        display="block"
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
          mt={["40px", "40px", "35px", "35px"]}
          flexDirection="column"
          alignSelf="flex-start"
          variants={itemAnimation}
        >
          <Heading
            fontSize={["3xl", "4xl", "5xl", "6xl"]}
            color="blue.600"
            fontWeight="bold"
          >
            Skills
          </Heading>
          <Text
            mt="-15px"
            fontSize={["lg", "lg", "xl"]}
            fontWeight="normal"
            color="gray.300"
          >
            that I&apos;ve been developing and perfecting myself daily
          </Text>
        </MotionFlex>
        <MotionGrid
          gap="8"
          my="24"
          mx="auto"
          px="4"
          templateColumns={[
            "1fr",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(4, 1fr)",
          ]}
          alignItems="center"
          justifyContent="center"
        >
          {programmingSkills?.map((skill, index) => (
            <MotionFlex
              key={skill?.id}
              alignItems="center"
              justifyContent="center"
              gap="2"
              px="2"
              py="6"
              w="full"
              borderRadius="lg"
              backgroundColor="whiteAlpha.50"
              flexDirection="column"
              _hover={{ backgroundColor: "whiteAlpha.200" }}
              whileHover={{ scale: 1.03 }}
              custom={index}
              variants={{
                visible: (index) => ({
                  opacity: 1,
                  transition: {
                    delay: index * 0.15,
                  },
                  y: 0,
                }),
                hidden: { opacity: 0, y: -100 },
              }}
            >
              <MotionImage
                alt={skill?.name}
                src={skill?.icon}
                title={skill?.name}
                height={["60px", "65px", "70px", "80px"]}
                width={["60px", "65px", "70px", "80px"]}
                custom={index}
                variants={{
                  visible: (index) => ({
                    opacity: 1,
                    transition: {
                      delay: index * 0.3,
                    },
                    x: 0,
                  }),
                  hidden: { opacity: 0, x: 200 },
                }}
              />
              <Text
                fontSize={["md", "lg"]}
                fontWeight="semibold"
                color="gray.100"
                textAlign="center"
                w="full"
              >
                {skill?.name}
              </Text>
            </MotionFlex>
          ))}
        </MotionGrid>
      </MotionFlex>
    </>
  );
};

export default Skills;

export const getStaticProps: GetStaticProps = async () => {
  const { data, error } = await supabase
    .from("programming_skills")
    .select("*")
    .order("id", { ascending: true });

  const programmingSkills = data?.map((skill) => {
    return {
      id: skill?.id,
      name: skill?.name,
      icon: skill?.icon,
    };
  });

  return {
    props: {
      programmingSkills,
    },
    revalidate: 60 * 60 * 3, // = 3 horas
  };
};
