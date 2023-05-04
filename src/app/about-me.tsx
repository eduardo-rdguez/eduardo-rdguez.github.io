import { Container } from '@chakra-ui/react';
import Summary from './summary';
import Header from './header';

export default function AboutMe() {
  return (
    <Container maxW={{ base: '4xl', md: 'xl', lg: '4xl' }}>
      <Header />
      <Summary />
    </Container>
  );
}
