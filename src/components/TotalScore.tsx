import { Box, Heading, Text } from "@chakra-ui/react";

type TotalScoreProps = {
  score: number;
};

export function TotalScore({ score }: TotalScoreProps) {
  return (
    <Box my={8} textAlign="center" bg="gray.200" p="4" borderRadius="1rem">
      <Text fontWeight="medium" fontSize="large">
        Pontuação atual:
      </Text>
      <Heading mt="2">{score}</Heading>
    </Box>
  );
}
