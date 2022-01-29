import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Link as ChakraLink,
} from "@chakra-ui/react";

import {
  PersonalProject as PersonalProjectType,
  PersonalProjects,
} from "./Personal";
import {
  LearningProject as LearningProjectType,
  LearningProjects,
} from "./Learning";
import {
  ProfessionalProject as ProfessionalProjectType,
  ProfessionalProjects,
} from "./Professional";

interface ProjectsTabsProps {
  tabIndex: number;
  handleTabsChange: (index: number) => void;
  allProjects: [];
}

export const ProjectsTabs = ({
  handleTabsChange,
  tabIndex,
  // projectTypeIndex,
  allProjects,
}: ProjectsTabsProps) => {
  const [personalProjects, setPersonalProjects] = useState<
    PersonalProjectType[]
  >([]);
  const [learningProjects, setLearningProjects] = useState<
    LearningProjectType[]
  >([]);
  const [professionalProjects, setProfessionalProjects] = useState<
    ProfessionalProjectType[]
  >([]);

  useEffect(() => {
    if (allProjects?.length > 0) {
      const personal = allProjects?.filter(
        (project) => project?.type === "personal"
      );
      const learning = allProjects?.filter(
        (project) => project?.type === "learning"
      );
      const professional = allProjects?.filter(
        (project) => project?.type === "professional"
      );

      setPersonalProjects(personal);
      setLearningProjects(learning);
      setProfessionalProjects(professional);
    }
  }, [allProjects]);

  return (
    <>
      <Box w="85%">
        <Tabs
          align="center"
          variant="solid-rounded"
          colorScheme="blue"
          index={tabIndex}
          onChange={handleTabsChange}
        >
          <TabList>
            <Tab
              fontSize={["sm", "md"]}
              fontWeight="medium"
              _focus={{ outline: "none" }}
            >
              Personal
            </Tab>
            <Tab
              fontSize={["sm", "md"]}
              fontWeight="medium"
              _focus={{ outline: "none" }}
            >
              Learning
            </Tab>
            <Tab
              fontSize={["sm", "md"]}
              fontWeight="medium"
              _focus={{ outline: "none" }}
            >
              {" "}
              Professional
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <PersonalProjects projects={personalProjects} />
            </TabPanel>
            <TabPanel>
              <LearningProjects projects={learningProjects} />
            </TabPanel>
            <TabPanel>
              <ProfessionalProjects projects={professionalProjects} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};
