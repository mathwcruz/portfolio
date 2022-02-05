import { Box, Button, Stack } from "@chakra-ui/react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

interface PaginationProps {
  projectsPerPage: number;
  currentPage: number;
  totalProjects: number;
  paginate: (pageNumber: number) => void;
}

export const Pagination = ({
  projectsPerPage,
  currentPage,
  totalProjects,
  paginate,
}: PaginationProps) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProjects / projectsPerPage); i++) {
    pageNumbers.push(i);
  }

  console.log({ currentPage, pageNumbers });

  return (
    <Stack direction="row" justify="center" alignItems="center" spacing="6">
      <Stack direction="row" spacing="2">
        <Button
          size="sm"
          fontSize="md"
          bg="black"
          _hover={{ bg: "black", opacity: 0.7 }}
          _focus={{ outline: "none" }}
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <MdKeyboardArrowLeft color="blue.600" size={26} />
        </Button>
        {pageNumbers?.map((pageNumber) => (
          <Box key={pageNumber}>
            <Button
              size="sm"
              fontSize="md"
              w="4"
              color={currentPage === pageNumber ? "gray.100" : "blue.600"}
              bg={currentPage === pageNumber ? "blue.600" : "gray.100"}
              _hover={{ bg: "gray.300" }}
              _focus={{ outline: "none" }}
              onClick={() => paginate(pageNumber)}
            >
              {pageNumber}
            </Button>
          </Box>
        ))}
        <Button
          size="sm"
          fontSize="md"
          bg="black"
          _hover={{ bg: "black", opacity: 0.7 }}
          _focus={{ outline: "none" }}
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage >= pageNumbers?.length}
        >
          <MdKeyboardArrowRight color="blue.600" size={22} />
        </Button>
      </Stack>
    </Stack>
  );
};
