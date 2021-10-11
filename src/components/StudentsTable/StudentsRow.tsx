import { ChevronRightIcon } from "@chakra-ui/icons";
import { Text, Tr, Td } from "@chakra-ui/react";

type StudentsRowProps = {
  title: string;
  reward: number;
};

export function StudentsRow({ title, reward }: StudentsRowProps) {
  return (
    <Tr transition="0.2s" cursor="pointer" _hover={{ bg: "gray.200" }}>
      <Td>
        <Text fontWeight="bold">{title}</Text>
      </Td>
      <Td>{reward}</Td>
      <Td textAlign="center">18/20</Td>
      <Td textAlign="center">42 pontos</Td>
      <Td isNumeric>
        <ChevronRightIcon w={6} h={6} />
      </Td>
    </Tr>
  );
}
