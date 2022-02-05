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

interface ProjectsTabsProps {
  tabIndex: number;
  handleTabsChange: (index: number) => void;
}

export const ProjectsTabs = ({
  handleTabsChange,
  tabIndex,
}: ProjectsTabsProps) => {
  return (
    <Box mx="auto" mt="56" w="95%">
      <Tabs
        alignItems="center"
        display="flex"
        flexDirection="column"
        variant="solid-rounded"
        colorScheme="custom"
        index={tabIndex}
        onChange={handleTabsChange}
        color="gray.100"
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
