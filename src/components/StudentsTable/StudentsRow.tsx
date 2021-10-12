import { ChevronRightIcon } from "@chakra-ui/icons";
import { Text, Tr, Td } from "@chakra-ui/react";

type StudentsRowProps = {
  id: number;
  name: string;
  score: number;
};

export function StudentsRow({ id, name, score }: StudentsRowProps) {
  return (
    <Tr transition="0.2s" cursor="pointer" _hover={{ bg: "gray.200" }}>
      <Td>
        <Text fontWeight="bold">{name}</Text>
      </Td>
      <Td>{id}</Td>
      <Td textAlign="center">{score} pontos</Td>
      <Td isNumeric>
        <ChevronRightIcon w={6} h={6} />
      </Td>
    </Tr>
  );
}
