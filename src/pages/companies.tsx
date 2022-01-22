import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import { ApiError } from "@supabase/supabase-js";
import {
  Text,
  Heading,
  Flex,
  IconButton,
  Icon,
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
        h="100%"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
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
        <Heading>Companies</Heading>
        {/* <ThemeSwitcher position="absolute" top="1.5" right="6" /> */}
      </Flex>
    </>
  );
};

export default Companies;

export const getStaticProps: GetStaticProps = async () => {
  const { data, error } = await supabase.from("companies").select("*");

  const companies = data?.map((company) => {
    return {
      id: company?.id,
      name: company?.name,
      logo: company?.logo,
    };
  });

  return {
    props: {
      companies,
      error,
    },
    revalidate: 60 * 60 * 3, // = 3 horas
  };
};
