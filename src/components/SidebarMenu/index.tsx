import { Box, useBreakpointValue } from "@chakra-ui/react";

import { Drawer } from "components/SidebarMenu/Drawer";
import { SidebarMenuNav } from "components/SidebarMenu/SidebarMenuNav";
import { useSidebarMenuDrawer } from "contexts/SidebarMenuDrawerContext";

export const SidebarMenu = () => {
  const { isOpen, onClose } = useSidebarMenuDrawer();

  const isDrawerSidebarMenu = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isDrawerSidebarMenu) {
    return (
      <Drawer description="Navigation" isOpen={isOpen} onClose={onClose}>
        <SidebarMenuNav />
      </Drawer>
    );
  }

  return (
    <Box as="aside" w="64" mr="4">
      <SidebarMenuNav />
    </Box>
  );
};
