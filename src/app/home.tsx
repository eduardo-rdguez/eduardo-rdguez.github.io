import { Container, Stack, VStack } from '@chakra-ui/react';
import Profile from './profile';
import Header from './header';

export default function Home() {
  return (
    <Container maxW={{ base: '4xl', lg: '6xl' }}>
      <Stack h="full">
        <Header />
        <VStack h="full">
          <Profile />
        </VStack>
      </Stack>
    </Container>
  );
}
