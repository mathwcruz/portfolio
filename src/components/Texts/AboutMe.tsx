import { Flex, Text, Link as ChakraLink } from "@chakra-ui/react";

interface TextHighlightProps {
  text: string;
}

const TextHighlight = ({ text }: TextHighlightProps) => (
  <Text display="inline" fontWeight="bold" color="blue.600">
    {text}
  </Text>
);

interface AboutMeProps {
  totalProjectsCount: number;
}

export const AboutMe = ({ totalProjectsCount }) => {
  return (
    <Flex
      alignItem="center"
      justifyContent="center"
      flexDirection="column"
      textAlign="center"
      gap="10px"
      w="full"
      maxW={["270px", "380px", "480px", "600px"]}
      mt="12"
    >
      <Text fontSize={["md", "md", "lg"]} fontWeight="medium" color="gray.100">
        Nice to meet you, I&apos;m Matheus da Cruz, a brazilian born in Rio
        Grande do Sul, <TextHighlight text="Software Developer" /> specialized
        in <TextHighlight text="Front End" />.
      </Text>
      <Text fontSize={["md", "md", "lg"]} fontWeight="medium" color="gray.100">
        Passionate about <TextHighlight text="technology" />,{" "}
        <TextHighlight text="blockchain" />, <TextHighlight text="astronomy" />{" "}
        and <TextHighlight text="economics" />, I also love to travel, meet new
        cultures and I&apos;m a crypto enthusiast. I&apos;m quite extroverted
        with whom I am more intimate, very ambitious, self-taught,
        self-critical, I like talk a lot, but I&apos;m also very anxious and
        sometimes I talk even more.
      </Text>
      <Text fontSize={["md", "md", "lg"]} fontWeight="medium" color="gray.100">
        I started in the world of programming in the second half of 2020, where
        I began to learn and develop my first projects with{" "}
        <TextHighlight text="HTML" />, <TextHighlight text="CSS" /> and{" "}
        <TextHighlight text="Javascript" />. I fell in love face to face for the
        front end and I decided that I would study and develop myself to be an
        expert in this branch. Check out the{" "}
        <ChakraLink
          textDecoration="underline"
          color="blue.600"
          _hover={{ opacity: "0.8" }}
          href="/skills"
        >
          technologies
        </ChakraLink>{" "}
        that I&apos;ve perfected over time.
      </Text>
      <Text fontSize={["md", "md", "lg"]} fontWeight="medium" color="gray.100">
        After much study, dedication and headache, my first career opportunity
        knocked into my door, the same company I currently work for,{" "}
        <TextHighlight text="Combate à Fraude (CAF)" />, helping in the
        development of applications that has as main goal to make the web a
        safer and more ethical place.
      </Text>
      <Text fontSize={["md", "md", "lg"]} fontWeight="medium" color="gray.100">
        In addition to the projects developed for companies, I have already
        developed {totalProjectsCount} personal projects, you can check they by{" "}
        <ChakraLink
          textDecoration="underline"
          color="blue.600"
          _hover={{ opacity: "0.8" }}
          href="/personal-projects"
        >
          clicking here
        </ChakraLink>
        .
      </Text>
      <Text fontSize={["md", "md", "lg"]} fontWeight="medium" color="gray.100">
        My main goal in the area of technology is to solve a major global
        problem through technology.
      </Text>
    </Flex>
  );
};
