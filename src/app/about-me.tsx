import { Container, StackProps, VStack } from '@chakra-ui/react';
import Summary from './summary';
import Header from './header';
import SocialNetworks from './social-networks';

export default function AboutMe() {
  return (
    <Container maxW={{ base: '2xl', lg: '4xl' }}>
      <Header />
      <Summary />
      <VStack {...socialNetworksProps}>
        <SocialNetworks />
      </VStack>
    </Container>
  );
}

const socialNetworksProps: StackProps = {
  display: 'flex',
  justifyContent: 'center',
  w: 'full',
  py: { base: 5, md: 8 },
};
