import { ReactElement } from "react";
import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";

interface DrawerSidebarProps {
  children: ReactElement;
  description: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Drawer = ({
  description,
  isOpen,
  onClose,
  children,
}: DrawerSidebarProps) => {
  return (
    <ChakraDrawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent bg="#0D0D0D" p="1.5">
          <DrawerCloseButton mt="3" color="white" />
          <DrawerHeader>{description}</DrawerHeader>
          <DrawerBody>{children}</DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </ChakraDrawer>
  );
};
