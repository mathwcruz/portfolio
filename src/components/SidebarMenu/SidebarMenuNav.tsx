import { useEffect } from "react";
import Image from "next/image";
import {
  Flex,
  Box,
  Icon,
  IconButton,
  useClipboard,
  useToast,
} from "@chakra-ui/react";
import { BsLinkedin, BsPersonBoundingBox } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { GiHypersonicBolt } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";
import { IoMdHome, IoMdDesktop } from "react-icons/io";

import { NavLink } from "components/SidebarMenu/NavLink";
import { useSidebarMenuDrawer } from "contexts/SidebarMenuDrawerContext";

export const SidebarMenuNav = () => {
  const { isOpen } = useSidebarMenuDrawer();

  const { hasCopied, onCopy } = useClipboard(
    process.env.NEXT_PUBLIC_PERSONAL_EMAIL
  );

  const toast = useToast();

  useEffect(() => {
    hasCopied &&
      toast({
        title: "E-mail copied to clipboard successfully!",
        description: "Now you can send me a message",
        status: "success",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
  }, [hasCopied]);

  //TODO: add animation

  return (
    <Flex
      bg="#0D0D0D"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-evenly"
      h={isOpen ? "100%" : "100vh"}
    >
      <Image
        alt="Matheus da Cruz avatar"
        src="/images/logo.png"
        width={180}
        height={180}
      />
      <NavLink href="/" icon={IoMdHome}>
        Home
      </NavLink>
      <NavLink href="/about" icon={BsPersonBoundingBox}>
        About
      </NavLink>
      <NavLink href="/skills" icon={GiHypersonicBolt}>
        Skills
      </NavLink>
      <NavLink
        href="/personal-projects"
        shouldMatchExactHref={false}
        icon={IoMdDesktop}
      >
        Projects
      </NavLink>
      <NavLink href="/companies" icon={FaHandshake}>
        Companies
      </NavLink>
      <Flex flexDirection="row" gap="4px">
        {/* TODO: componentize social media icons */}
        <IconButton
          aria-label="Github"
          icon={<Icon as={FiGithub} />}
          fontSize="22"
          color="white"
          _hover={{ color: "blue.600" }}
          variant="unstyled"
          title="Github"
          onClick={() => window.open("https://github.com/mathwcruz")}
        />
        <IconButton
          aria-label="Linkedin"
          icon={<Icon as={BsLinkedin} />}
          fontSize="22"
          color="white"
          _hover={{ color: "blue.600" }}
          variant="unstyled"
          title="Linkedin"
          onClick={() =>
            window.open("https://www.linkedin.com/in/matheus-cruz-frontend/")
          }
        />
        <IconButton
          aria-label="E-mail"
          icon={<Icon as={HiOutlineMail} />}
          fontSize="30"
          color="white"
          _hover={{ color: "blue.600" }}
          variant="unstyled"
          title="E-mail"
          onClick={onCopy}
        />
      </Flex>
    </Flex>
  );
};
