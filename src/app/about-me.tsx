import { Box, BoxProps, Container, StackProps, VStack } from '@chakra-ui/react';
import Summary from './summary';
import Header from './header';
import SocialMedia from './social-media';
import Skills from './skills';

import mesh from '../assets/mesh.svg';

export default function AboutMe() {
  return (
    <Container maxW={{ base: '2xl', lg: '4xl' }}>
      <Header />
      <VStack spacing={8} mt="40px">
        <Summary />
        <Skills />
        <VStack {...socialNetworksProps}>
          <SocialMedia stackProps={socialNetworksStackProps} />
        </VStack>
        <Box bgImage={mesh} {...meshBoxProps} />
      </VStack>
    </Container>
  );
}

const socialNetworksProps: StackProps = {
  display: 'flex',
  justifyContent: 'start',
  w: 'full',
  py: 5,
};

const socialNetworksStackProps: StackProps = {
  border: 'none',
};

const meshBoxProps: BoxProps = {
  position: 'absolute',
  w: 'full',
  h: 'full',
  className: 'mesh',
  bottom: 0,
};
