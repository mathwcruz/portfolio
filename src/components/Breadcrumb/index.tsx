import {
  Breadcrumb as BreadcrumbChakra,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from "@chakra-ui/react";
import { CgFormatSlash } from "react-icons/cg";

interface BreadcrumbProps {
  currentPage: string;
}

export const Breadcrumb = ({ currentPage }: BreadcrumbProps) => (
  <BreadcrumbChakra
    fontSize={["md", "md", "lg"]}
    fontWeight="medium"
    color="gray.200"
    spacing="2px"
    separator={<CgFormatSlash size={24} />}
  >
    <BreadcrumbItem>
      <Text>Projects</Text>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <Text>{currentPage}</Text>
    </BreadcrumbItem>
  </BreadcrumbChakra>
);
