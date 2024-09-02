import { Flex, Text, Link as ChakraLink } from "@chakra-ui/react";

import { CustomLink } from "components/CustomLink";

interface TextHighlightProps {
  text: string;
}

const TextHighlight = ({ text }: TextHighlightProps) => (
  <Text display="inline" fontWeight="bold" color="blue.600">
    {text}
  </Text>
);

export const AboutMe = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      textAlign="center"
      gap="10px"
      w="full"
      maxW={["270px", "380px", "580px", "750px"]}
      mt="10"
      color="gray.100"
    >
      <Text
        fontSize={["md", "md"]}
        lineHeight="tall"
        fontWeight="medium"
        color="gray.100"
      >
        Nice to meet you, I&apos;m Matheus da Cruz, a developer born in Brazil
        who is a specialist in{" "}
        <TextHighlight text="Front End web development" />.
      </Text>
      <Text
        fontSize={["md", "md"]}
        lineHeight="tall"
        fontWeight="medium"
        color="gray.100"
      >
        Passionate about <TextHighlight text="technology" />,{" "}
        <TextHighlight text="blockchain" />, <TextHighlight text="astronomy" />{" "}
        and <TextHighlight text="economics" />, I also love to travel,
        experience new cultures, hang out with my friends, read, work out and
        study economics.
      </Text>
      <Text
        fontSize={["md", "md"]}
        lineHeight="tall"
        fontWeight="medium"
        color="gray.100"
      >
        I began my programming journey in August 2020 when I decided to study
        programming logic and later <TextHighlight text="HTML" />,{" "}
        <TextHighlight text="CSS" /> and <TextHighlight text="JavaScript" />.
        Right away, I fell in love with{" "}
        <TextHighlight text="Front End web development" /> and decided to
        dedicate myself to becoming a specialist. You can check out the{" "}
        <CustomLink href="/skills">
          <ChakraLink
            textDecoration="underline"
            color="blue.600"
            _hover={{ opacity: "0.8" }}
          >
            technologies
          </ChakraLink>
        </CustomLink>{" "}
        that I&apos;ve perfected throughout my career.
      </Text>
      <Text
        fontSize={["md", "md"]}
        lineHeight="tall"
        fontWeight="medium"
        color="gray.100"
      >
        My professional journey began in April 2021 at a newly founded startup
        in Brazil aimed at combating digital fraud through technology.
      </Text>
      <Text
        fontSize={["md", "md"]}
        lineHeight="tall"
        fontWeight="medium"
        color="gray.100"
      >
        In addition to my involvement in corporate projects, I have developed{" "}
        more than 30 personal projects. You can check them all out by{" "}
        <CustomLink href="/portfolio">
          <ChakraLink
            textDecoration="underline"
            color="blue.600"
            _hover={{ opacity: "0.8" }}
          >
            clicking here
          </ChakraLink>
        </CustomLink>
        .
      </Text>
    </Flex>
  );
};
