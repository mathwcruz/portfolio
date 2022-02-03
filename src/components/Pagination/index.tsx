import { Box, Button, Stack } from "@chakra-ui/react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

interface Paginationprops {
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
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProjects / projectsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Stack direction="row" justify="center" align="center" spacing="6">
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
              color="blue.600"
              w="4"
              bg="gray.100"
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
