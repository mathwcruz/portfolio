import {
  Box,
  Flex,
  Heading,
  Image,
  Link as ChakraLink,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";

import { SocialMediaButton } from "components/SidebarMenu/SocialMediaButton";

interface ProjectsListProps {
  projects: {
    id: string;
    name: string;
    banner: string;
    technologies: string[];
    description?: string;
    websiteUrl?: string;
    githubRepository?: string;
  }[];
}

export const ProjectsList = ({ projects }: ProjectsListProps) => {
  const [isToChangeProjectItemUI] = useMediaQuery("(max-width: 1100px)");

  return (
    <>
      <Flex
        gap="8"
        mt="6"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        {/* TODO: try to create a pagination component */}
        {projects?.map((project) => (
          <Flex
            flexDirection={isToChangeProjectItemUI ? "column" : "row"}
            gap="4"
            key={project?.id}
          >
            <ChakraLink
              alignSelf="start"
              _focus={{ outline: "none" }}
              isExternal
              href={project?.websiteUrl}
            >
              <Image
                src={project?.banner}
                alt={`${project?.name} banner`}
                maxW={["320px", "320px", "450px"]}
                borderRadius="md"
                cursor={project?.websiteUrl ? "pointer" : "default"}
                _hover={{ opacity: "0.95" }}
              />
            </ChakraLink>
            <Flex
              alignItems="center"
              flexDirection="column"
              gap={isToChangeProjectItemUI ? "2" : "3"}
            >
              <ChakraLink
                w="100%"
                color="white"
                _focus={{ outline: "none" }}
                _hover={{ textDecoration: "none", color: "blue.600" }}
                isExternal
                href={project?.websiteUrl}
              >
                <Heading
                  maxW={isToChangeProjectItemUI ? "400px" : "380px"}
                  alignSelf={isToChangeProjectItemUI ? "flex-start" : "end"}
                  wordBreak="break-all"
                  textAlign={isToChangeProjectItemUI ? "start" : "end"}
                  fontSize="2xl"
                >
                  {project?.name}
                </Heading>
              </ChakraLink>
              <Box w="100%" borderRadius="md">
                <Text
                  maxW={isToChangeProjectItemUI ? "400px" : "350px"}
                  textAlign={isToChangeProjectItemUI ? "start" : "end"}
                  color="white"
                  fontWeight="semibold"
                  fontSize={isToChangeProjectItemUI ? "smaller" : "sm"}
                  border="none"
                >
                  {project?.description}
                </Text>
              </Box>
              <Flex
                w="100%"
                gap="3"
                alignItems="center"
                justifyContent={isToChangeProjectItemUI ? "start" : "end"}
              >
                {project?.technologies?.map((technology) => (
                  <Image
                    key={technology}
                    alt="technology icon"
                    src={technology}
                    maxW="35px"
                  />
                ))}
              </Flex>
              {(project?.githubRepository || project?.websiteUrl) && (
                <Flex
                  w="100%"
                  alignItems="center"
                  justifyContent={isToChangeProjectItemUI ? "start" : "end"}
                  mr={isToChangeProjectItemUI ? "0px" : "-25px"}
                  ml={isToChangeProjectItemUI ? "-15px" : "0px"}
                >
                  {project?.githubRepository && (
                    <SocialMediaButton
                      text="Github repository"
                      icon={FiGithub}
                      link={project?.githubRepository}
                    />
                  )}
                  {project?.websiteUrl && (
                    <SocialMediaButton
                      text="Website"
                      icon={HiOutlineExternalLink}
                      size={25}
                      link={project?.websiteUrl}
                    />
                  )}
                </Flex>
              )}
            </Flex>
          </Flex>
        ))}
      </Flex>
    </>
  );
};
