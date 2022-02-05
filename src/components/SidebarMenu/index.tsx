import { Box, useMediaQuery } from "@chakra-ui/react";

import { Drawer } from "components/SidebarMenu/Drawer";
import { SidebarMenuNav } from "components/SidebarMenu/SidebarMenuNav";
import { useSidebarMenuDrawer } from "contexts/SidebarMenuDrawerContext";

export const SidebarMenu = () => {
  const { isOpen, onClose } = useSidebarMenuDrawer();

  const [isDrawerSidebarMenu] = useMediaQuery("(max-width: 800px)");

  if (isDrawerSidebarMenu) {
    return (
      <Drawer isOpen={isOpen} onClose={onClose}>
        <SidebarMenuNav />
      </Drawer>
    );
  }

  return (
    <Box
      as="aside"
      w="64"
      mr="4"
      bg="#0D0D0D"
      borderRight="1px"
      borderColor="gray.600"
    >
      <SidebarMenuNav />
    </Box>
  );
};
