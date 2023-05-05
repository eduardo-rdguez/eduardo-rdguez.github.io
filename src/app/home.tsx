import { Container } from '@chakra-ui/react';
import Header from './header';
import Profile from './profile';
import Footer from './footer';

export default function Home() {
  return (
    <Container maxW={{ base: '4xl', lg: '6xl' }}>
      <Header />
      <Profile />
      <Footer />
    </Container>
  );
}
