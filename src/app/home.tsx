import { Container } from '@chakra-ui/react';
import Header from './header';
import Introduction from './introduction';
import Footer from './footer';

export default function Home() {
  return (
    <Container maxW={{ base: '4xl', lg: '6xl' }}>
      <Header />
      <Introduction />
      <Footer />
    </Container>
  );
}
