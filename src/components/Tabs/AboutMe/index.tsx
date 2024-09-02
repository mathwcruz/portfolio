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
import { ProfessionalExperience, Graduation, Education } from "pages/about";

interface AboutMeProps {
  tabIndex: number;
  handleTabsChange: (index: number) => void;
  data: {
    professionalExperience: ProfessionalExperience[];
    graduations: Graduation[];
    education: Education[];
  };
}

export const AboutMe = ({ tabIndex, handleTabsChange, data }: AboutMeProps) => {
  const { professionalExperience, graduations, education } = data;

  return (
    <Box mx="auto" my="0" w="65%">
      <Tabs
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        variant="solid-rounded"
        colorScheme="gray"
        color="gray.100"
        index={tabIndex}
        onChange={handleTabsChange}
      >
        <TabList>
          <Tab
            fontSize={["sm", "md"]}
            fontWeight="medium"
            _focus={{ outline: "none" }}
          >
            Professional experience
          </Tab>
          <Tab
            fontSize={["sm", "md"]}
            fontWeight="medium"
            _focus={{ outline: "none" }}
          >
            Education
          </Tab>
          <Tab
            fontSize={["sm", "md"]}
            fontWeight="medium"
            _focus={{ outline: "none" }}
          >
            {" "}
            Graduations
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Grid
              templateColumns={["1fr", "1fr", "1fr", "repeat(2, 1fr)"]}
              w={["85%", "80%", "80%", "80%", "65%"]}
              mx="auto"
              textAlign="center"
            >
              {professionalExperience?.map((xp) => (
                <Flex
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                  p="6"
                  key={xp?.id}
                >
                  <ChakraLink
                    color="white"
                    fontWeight="medium"
                    fontSize="md"
                    textDecoration="underline"
                    _hover={{
                      opacity: "0.6",
                    }}
                    _focus={{ outline: "none" }}
                    isExternal
                    href={xp?.companyWebsiteUrl}
                  >
                    {xp?.companyName}
                  </ChakraLink>
                  <Heading
                    mt="1.5"
                    fontSize="lg"
                    fontWeight="semibold"
                    color="blue.600"
                  >
                    {xp?.position}
                  </Heading>
                  <Text
                    mt="1.5"
                    fontSize="sm"
                    fontWeight="normal"
                    color="white"
                  >
                    {xp?.professionalExperiencePeriod}
                  </Text>
                  <Flex gap="5px" alignItems="center" justifyContent="center">
                    {xp?.technologies?.map((technology) => (
                      <Image
                        boxSize="30px"
                        alt="tech"
                        mt="1.5"
                        src={technology}
                        key={technology}
                      />
                    ))}
                  </Flex>
                </Flex>
              ))}
            </Grid>
          </TabPanel>
          <TabPanel>
            <Grid
              templateColumns={["1fr", "1fr", "1fr", "repeat(2, 1fr)"]}
              w={["85%", "80%", "80%", "80%", "65%"]}
              mx="auto"
              textAlign="center"
            >
              {education?.map((ed) => (
                <Flex
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  p="4"
                  key={ed?.id}
                >
                  <ChakraLink
                    color="white"
                    fontWeight="medium"
                    fontSize="md"
                    textDecoration="underline"
                    _hover={{
                      opacity: "0.6",
                    }}
                    _focus={{ outline: "none" }}
                    isExternal
                    href={ed?.institutionWebsiteUrl}
                  >
                    {ed?.institution}
                  </ChakraLink>
                  <Heading mt="1.5" fontSize="lg" fontWeight="semibold" color="blue.600">
                    {ed?.name}
                  </Heading>
                  <Text
                    mt="1.5"
                    fontSize="sm"
                    fontWeight="normal"
                    color="white"
                  >
                    {ed?.educationPeriod}
                  </Text>
                </Flex>
              ))}
            </Grid>
          </TabPanel>
          <TabPanel>
            {graduations?.map((graduation) => (
              <Flex
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                p="6"
                key={graduation?.id}
              >
                <ChakraLink
                  color="white"
                  fontWeight="medium"
                  fontSize="md"
                  textDecoration="underline"
                  _hover={{
                    opacity: "0.6",
                  }}
                  _focus={{ outline: "none" }}
                  isExternal
                  href={graduation?.institutionWebsiteUrl}
                >
                  {graduation?.institution}
                </ChakraLink>
                <Heading mt="1.5" fontSize="lg" fontWeight="semibold" color="blue.600">
                  {graduation?.course}
                </Heading>
                <Text mt="1.5" fontSize="sm" fontWeight="normal" color="white">
                  {graduation?.graduationPeriod}
                </Text>
              </Flex>
            ))}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
