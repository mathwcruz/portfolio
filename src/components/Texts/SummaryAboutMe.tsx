import { Flex, Box, Image, Text, Link as ChakraLink } from "@chakra-ui/react";

import { CustomLink } from "components/CustomLink";

interface SummaryAboutMeProps {
  personalPicture: string;
  currentCompany?: string;
}

export const SummaryAboutMe = ({
  personalPicture,
  currentCompany,
}: SummaryAboutMeProps) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="22px"
      w="100%"
      h="100%"
      maxWidth={[280, 360, 520, 680, 1020]}
      color="gray.100"
    >
      <Image
        alt="Matheus da Cruz picture"
        src={personalPicture}
        borderRadius="full"
        boxSize={["135px", "160px", "180px"]}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: "16px",
        }}
      >
        <Text
          color="gray.100"
          fontSize={["xl", "2xl", "3xl"]}
          fontWeight="extrabold"
          textAlign="center"
          px="3"
        >
          Hi, I&apos;m Matheus da Cruz
        </Text>
        <Text
          fontSize={["sm", "md", "lg"]}
          fontWeight="bold"
          textAlign="center"
          color="blue.600"
          px="3"
        >
          Front End Developer
        </Text>
        <Box
          color="gray.100"
          fontSize={["sm", "sm", "md"]}
          lineHeight="tall"
          fontWeight="medium"
          textAlign="center"
          px="3"
          mt="3"
          maxWidth={[260, 340, 500, 670]}
        >
          Currently residing in Brazil, I&apos;m a developer passionate about layout
          and UI/UX. I currently work at ADP Brazil Labs. My main goal in the
          technology field is to be part of a team that will solve a major
          global problem through technology. I&apos;m constantly dedicated to
          improving myself and being ready to embark on this adventure. You can learn more about me by{" "}
          <CustomLink href="/about">
            <ChakraLink
              textDecoration="underline"
              color="blue.600"
              _hover={{ opacity: "0.8" }}
            >
              clicking here
            </ChakraLink>
          </CustomLink>
        </Box>
      </div>
    </Flex>
  );
};
