import { createContext, ReactNode, useContext, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";

interface SidebarMenuDrawerProviderProps {
  children: ReactNode;
}

type SidebarMenuDrawerContextData = UseDisclosureReturn;

const SidebarMenuDrawerContext = createContext(
  {} as SidebarMenuDrawerContextData
);

export function SidebarMenuDrawerProvider({
  children,
}: SidebarMenuDrawerProviderProps) {
  const disclosure = useDisclosure();
  const { asPath } = useRouter();

  // closing the SidebarMenu after the user navigates to another route
  useEffect(() => {
    disclosure.onClose();
  }, [asPath]);

  return (
    <SidebarMenuDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarMenuDrawerContext.Provider>
  );
}

export const useSidebarMenuDrawer = () => {
  return useContext(SidebarMenuDrawerContext);
};
