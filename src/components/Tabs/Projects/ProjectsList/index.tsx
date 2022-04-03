/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Image,
  Link as ChakraLink,
  Text,
  Spinner,
  useMediaQuery,
} from "@chakra-ui/react";
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";

import { SocialMediaButton } from "components/SidebarMenu/SocialMediaButton";
import { Pagination } from "components/Pagination";

import { supabase } from "services/supabase";

import { MotionImage, MotionFlex, animationFlex } from "styles/animation";

type Project = {
  id: string;
  name: string;
  banner: string;
  technologies: string[];
  description?: string;
  websiteUrl?: string;
  githubRepository?: string;
};

interface ProjectsListProps {
  type: string;
}

export const ProjectsList = ({ type }: ProjectsListProps) => {
  const [isToChangeProjectItemUI] = useMediaQuery("(max-width: 1100px)");

  const [projects, setProjects] = useState<Project[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [projectsPerPage] = useState<number>(3);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getAllProjectsType = async () => {
      try {
        setIsLoading(true);
        const { data, error: projectError } = await supabase
          .from("projects")
          .select("*")
          .eq("type", type)
          .order("id", { ascending: true });

        const projects = data?.map((project) => {
          return {
            id: project?.id,
            name: project?.name,
            banner: project?.banner,
            technologies: project?.technologies,
            description: project?.description,
            websiteUrl: project?.website_url,
            githubRepository: project?.github_repository,
          };
        });
        setProjects(projects);
      } catch (error) {
      } finally {
        // add some delay to show loading spinner, for better UX
        setTimeout(() => setIsLoading(false), 400);
      }
    };

    getAllProjectsType();
  }, []);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <MotionFlex
        gap="8"
        mt="6"
        h="100%"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        initial="hidden"
        animate="visible"
        variants={animationFlex}
      >
        {isLoading ? (
          <Spinner color="blue.600" size="xl" thickness="2px" speed="0.7s" />
        ) : (
          <>
            {currentProjects?.map((project) => (
              <Flex
                flexDirection={isToChangeProjectItemUI ? "column" : "row"}
                gap="4"
                paddingY={!isToChangeProjectItemUI && "3"}
                key={project?.id}
              >
                <ChakraLink
                  alignSelf="start"
                  _focus={{ outline: "none" }}
                  isExternal
                  href={project?.websiteUrl}
                >
                  <MotionImage
                    src={project?.banner}
                    alt={`${project?.name} banner`}
                    maxW={["320px", "320px", "450px"]}
                    borderRadius="md"
                    cursor={project?.websiteUrl ? "pointer" : "default"}
                    _hover={{ opacity: "0.95" }}
                    whileHover={{ scale: 1.03 }}
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
                    href={project?.websiteUrl || project.githubRepository}
                  >
                    <Heading
                      maxW={isToChangeProjectItemUI ? "400px" : "380px"}
                      alignSelf={isToChangeProjectItemUI ? "flex-start" : "end"}
                      wordBreak="break-all"
                      textAlign={isToChangeProjectItemUI ? "start" : "end"}
                      fontSize="2xl"
                      color="white"
                      _hover={{ color: "gray.300" }}
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
            <Flex>
              <Pagination
                projectsPerPage={projectsPerPage}
                currentPage={currentPage}
                totalProjects={projects.length}
                paginate={paginate}
              />
            </Flex>
          </>
        )}
      </MotionFlex>
    </>
  );
};
