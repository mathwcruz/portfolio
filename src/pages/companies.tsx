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

// import { ThemeSwitcher } from "components/ThemeSwitcher";
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

  console.log({ companies });

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
        <Flex position="absolute" top="20" left="20" flexDirection="column">
          <Heading fontSize="6xl" color="blue.600" fontWeight="bold">
            Companies
          </Heading>
          <Text
            pl="2"
            mt="-10px"
            fontSize="lg"
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
              _hover={{ borderColor: "gray.100" }}
              href={company?.websiteUrl}
            >
              <Image
                alt={company?.name}
                src={company?.logo}
                title={company?.name}
                height="100px"
                width="300px"
                px="1"
                py="2"
              />
            </ChakraLink>
          ))}
        </Flex>
        {/* <ThemeSwitcher position="absolute" top="1.5" right="6" /> */}
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
