import { useEffect } from "react";
import Image from "next/image";
import { Flex, Box, useClipboard, useToast } from "@chakra-ui/react";
import { BsLinkedin, BsPersonBoundingBox } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { GiHypersonicBolt } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";
import { IoMdHome, IoMdDesktop } from "react-icons/io";

import { NavLink } from "components/SidebarMenu/NavLink";
import { SocialMediaButton } from "components/SidebarMenu/SocialMediaButton";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasCopied]);

  //TODO: add animation

  return (
    <Flex
      bg="#0D0D0D"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-evenly"
      h="100%"
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
        <SocialMediaButton
          icon={FiGithub}
          text="Github"
          link="https://github.com/mathwcruz"
        />
        <SocialMediaButton
          icon={BsLinkedin}
          text="Linkedin"
          link="https://www.linkedin.com/in/matheus-cruz-frontend/"
        />
        <SocialMediaButton
          icon={HiOutlineMail}
          text="E-mail"
          size="30"
          onClick={onCopy}
        />
      </Flex>
    </Flex>
  );
};
