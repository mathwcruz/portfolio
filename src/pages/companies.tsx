import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { ApiError } from "@supabase/supabase-js";
import {
  Text,
  Heading,
  Flex,
  IconButton,
  Icon,
  Image,
  Link as ChakraLink,
  useMediaQuery,
} from "@chakra-ui/react";
import { BiMenuAltLeft } from "react-icons/bi";

import { useSidebarMenuDrawer } from "contexts/SidebarMenuDrawerContext";
import { supabase } from "services/supabase";

type Company = {
  id: string;
  name: string;
  logo: string;
  websiteUrl: string;
};

interface CompaniesProps {
  companies: Company[];
  error: ApiError;
}

const Companies: NextPage = ({ companies, error }: CompaniesProps) => {
  const { onOpen } = useSidebarMenuDrawer();

  const [isToShowOpenMenuButton] = useMediaQuery("(max-width: 800px)");

  // TODO: Add transitions and effects;

  return (
    <>
      <Head>
        <title>Matheus da Cruz</title>
      </Head>

      <Flex
        w="100%"
        h="100vh"
        p="5"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        {isToShowOpenMenuButton && (
          <IconButton
            aria-label="Open menu"
            icon={<Icon as={BiMenuAltLeft} />}
            fontSize="30"
            mr="2"
            color="white"
            variant="unstyled"
            top="3"
            left="3"
            position="absolute"
            onClick={onOpen}
          />
        )}
        <Flex
          position="absolute"
          top={["70", "20"]}
          left={["5", "5", "10"]}
          flexDirection="column"
        >
          <Heading
            fontSize={["2xl", "2xl", "4xl", "6xl"]}
            color="blue.600"
            fontWeight="bold"
          >
            Companies
          </Heading>
          <Text
            pl={["0", "0", "2"]}
            mt={["0", "0", "-10px"]}
            fontSize={["md", "lg"]}
            fontWeight="normal"
            color="gray.300"
          >
            in which I had an active participation in the development of their
            products and services
          </Text>
        </Flex>
        <Flex>
          {companies?.map((company) => (
            <ChakraLink
              key={company.id}
              textDecoration="none"
              borderRadius="md"
              border="solid"
              borderColor="gray.300"
              borderWidth="2px"
              cursor="pointer"
              _hover={{ borderColor: "white" }}
              _focus={{ outline: "none" }}
              href={company?.websiteUrl}
              isExternal
            >
              <Image
                alt={company?.name}
                src={company?.logo}
                title={company?.name}
                width={["200px", "230px", "250px"]}
                p="3"
              />
            </ChakraLink>
          ))}
        </Flex>
      </Flex>
    </>
  );
};

export default Companies;

export const getStaticProps: GetStaticProps = async () => {
  const { data, error: companiesError } = await supabase
    .from("companies")
    .select("*");

  const companies = data?.map((company) => {
    return {
      id: company?.id,
      name: company?.name,
      logo: company?.logo,
      websiteUrl: company?.website_url,
    };
  });

  return {
    props: {
      companies,
      error: companiesError,
    },
    revalidate: 60 * 60 * 3, // = 3 horas
  };
};
