import { ChevronRightIcon } from "@chakra-ui/icons";
import { Text, Tr, Td, Badge } from "@chakra-ui/react";

type ScoreTaskRowProps = {
  title: string;
  status: "pending" | "done";
  reward: number;
};

export function ScoreTaskRow({ title, status, reward }: ScoreTaskRowProps) {
  return (
    <Tr transition="0.2s" cursor="pointer" _hover={{ bg: "gray.200" }}>
      <Td>
        <Text fontWeight="bold">{title}</Text>
      </Td>
      <Td>
        {status === "done" ? (
          <Badge colorScheme="green">Feito</Badge>
        ) : (
          <Badge colorScheme="orange">Pendente</Badge>
        )}
      </Td>
      <Td>{reward} pontos</Td>
      <Td isNumeric>
        <ChevronRightIcon w={6} h={6} />
      </Td>
    </Tr>
  );
}
