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
} from "@chakra-ui/react";

import { ProjectsList } from "components/Tabs/Projects/ProjectsList";
import { MotionTabs } from "styles/animation";

interface ProjectsTabsProps {
  tabIndex: number;
  handleTabsChange: (index: number) => void;
}

export const ProjectsTabs = ({
  handleTabsChange,
  tabIndex,
}: ProjectsTabsProps) => {
  return (
    <Box mt="56" w="95%">
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
            <ProjectsList type="personal" />
          </TabPanel>
          <TabPanel>
            <ProjectsList type="learning" />
          </TabPanel>
          <TabPanel>
            <ProjectsList type="professional" />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
