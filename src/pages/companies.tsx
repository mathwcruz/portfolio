import { GetStaticProps } from "next";
import Head from "next/head";
import {
  Text,
  Heading,
  IconButton,
  Icon,
  Image,
  useMediaQuery,
} from "@chakra-ui/react";
import { BiMenuAltLeft } from "react-icons/bi";

import { useSidebarMenuDrawer } from "contexts/SidebarMenuDrawerContext";

import { supabase } from "services/supabase";

import {
  MotionFlex,
  MotionChakraLink,
  animationFlex,
  itemAnimation,
} from "styles/animation";

type Company = {
  id: string;
  name: string;
  logo: string;
  websiteUrl: string;
};

interface CompaniesProps {
  companies: Company[];
}

const Companies = ({ companies }: CompaniesProps) => {
  const { onOpen } = useSidebarMenuDrawer();

  const [isToShowOpenMenuButton] = useMediaQuery("(max-width: 800px)");

  return (
    <>
      <Head>
        <title>Matheus da Cruz</title>
      </Head>

      <MotionFlex
        w="100%"
        h="100vh"
        px="5"
        pb="5"
        pt={!isToShowOpenMenuButton ? "120px" : "5"}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        position="relative"
        initial="hidden"
        animate="visible"
        variants={animationFlex}
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
        <MotionFlex
          position="absolute"
          top={!isToShowOpenMenuButton ? "140" : "70"}
          left={["5", "5", "10"]}
          flexDirection="column"
          variants={itemAnimation}
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
            mt={["0", "0", "-5px", "-10px"]}
            fontSize={["md", "lg"]}
            fontWeight="normal"
            color="gray.300"
          >
            in which I had an active participation in the development of their
            products and services
          </Text>
        </MotionFlex>
        <MotionFlex
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          gap={["5px", "10px", "20px", "25px"]}
          flexDirection={["column", "column", "row"]}
          alignItems="center"
          justifyContent="center"
        >
          {companies?.map((company) => (
            <MotionChakraLink
              key={company.id}
              alignSelf="center"
              textDecoration="none"
              cursor="pointer"
              _focus={{ outline: "none" }}
              href={company?.websiteUrl}
              isExternal
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.03 }}
            >
              <Image
                alt={company?.name}
                src={company?.logo}
                title={company?.name}
                h={["130px", "150px", "180px"]}
                p="5"
              />
            </MotionChakraLink>
          ))}
        </MotionFlex>
      </MotionFlex>
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
    },
    revalidate: 60 * 60 * 3, // = 3 horas
  };
};
