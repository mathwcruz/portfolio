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
          Hi, I&apos;m Matheus Wachholtz da Cruz
        </Text>
        <Text
          fontSize={["sm", "md", "lg"]}
          fontWeight="bold"
          textAlign="center"
          color="gray.100"
          px="3"
        >
          Front End Software Engineer at{" "}
          <Text display="inline" color="blue.600">
            {currentCompany}
          </Text>
        </Text>
        <Box
          color="gray.100"
          fontSize={["sm", "sm", "md"]}
          fontWeight="medium"
          textAlign="center"
          px="3"
          mt="3"
          maxWidth={[260, 340, 500, 670]}
        >
          Residing in Brazil, passionate about layout, UI/UX and user
          satisfaction. My main goal in the area of technology is to solve a
          major global problem through technology. I dedicate myself constantly
          to perfect myself as a developer and professional to be prepared for a
          challenge of this magnitude. Get to know a little more about me{" "}
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
