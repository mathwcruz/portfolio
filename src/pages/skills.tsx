import { GetStaticProps } from "next";
import Head from "next/head";
import {
  Text,
  Heading,
  Flex,
  IconButton,
  Icon,
  Progress,
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
  proficiency: number;
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
        h={["100%", "100%", "100%", "100%", "100vh"]}
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
          mt="50px"
          alignSelf="flex-start"
          flexDirection="column"
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
            mt="-10px"
            fontSize={["lg", "lg", "xl"]}
            fontWeight="normal"
            color="gray.300"
          >
            that I&apos;ve been developing and perfecting myself daily
          </Text>
        </MotionFlex>
        <MotionGrid
          gap="10"
          my="8"
          w="70%"
          templateColumns={["1fr", "1fr", "1fr", "1fr", "1fr 1fr"]}
          alignItems="center"
          justifyContent="center"
        >
          {programmingSkills?.map((skill, index) => (
            <MotionFlex
              key={skill?.id}
              alignItems="center"
              justifyContent="flex-start"
              gap="6"
              p="4"
              border="solid"
              borderWidth="2px"
              borderRadius="md"
              borderColor="gray.300"
              _hover={{ borderColor: "white" }}
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
                height={["65px", "70px", "75px", "85px"]}
                width={["65px", "70px", "75px", "85px"]}
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
              <Flex
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                w="100%"
                gap="8px"
              >
                <Text
                  fontSize={["md", "lg"]}
                  fontWeight="semibold"
                  color="gray.100"
                  textAlign="start"
                  alignSelf="start"
                >
                  {skill?.name}
                </Text>
                <Progress
                  value={skill?.proficiency}
                  title="Proficiency"
                  max={100}
                  min={1}
                  size="sm"
                  width="100%"
                  bg="white"
                  borderRadius="lg"
                  colorScheme="custom"
                />
              </Flex>
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
      proficiency: skill?.proficiency,
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
