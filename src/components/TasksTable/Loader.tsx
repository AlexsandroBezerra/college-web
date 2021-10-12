import { Tr, Td, Skeleton } from "@chakra-ui/react";

const TOTAL_ROWS = 5;

export function Loader() {
  const rows = Array(TOTAL_ROWS).fill(null);

  return (
    <>
      {rows?.map((_, index) => {
        return (
          <Tr
            key={index}
            transition="0.2s"
            cursor="pointer"
            _hover={{ bg: "gray.200" }}
          >
            <Td>
              <Skeleton h="2rem" />
            </Td>
            <Td>
              <Skeleton h="2rem" />
            </Td>
            <Td>
              <Skeleton h="2rem" />
            </Td>
            <Td>
              <Skeleton h="2rem" />
            </Td>
          </Tr>
        );
      })}
    </>
  );
}
