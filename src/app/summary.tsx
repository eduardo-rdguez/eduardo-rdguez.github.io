import {
  Box,
  Heading,
  HeadingProps,
  Highlight,
  Stack,
  StackProps,
  Text,
  TextProps,
  VStack,
} from '@chakra-ui/react';
import Skills from './skills';
import SocialNetworks from './social-networks';

import mesh from '../assets/mesh.svg';

export default function Summary() {
  return (
    <Stack
      justifyContent="center"
      spacing={{ base: 6, md: 8 }}
      mt={{ base: 0, md: 4 }}
    >
      <Stack>
        <VStack spacing={{ base: 4, md: 6 }} alignItems="flex-start">
          <Heading {...headingProps}>About me</Heading>
          <Text {...textProps}>
            <Highlight
              query="Hi, my name's Eduardo"
              styles={{
                px: 2,
                py: 1,
                rounded: 'full',
                bgColor: 'white',
                color: 'black',
                fontWeight: 'bold',
              }}
            >
              Hi, my name's Eduardo and I'm a software developer with a
              background in Back-End. I'm passionate about creating scalable and
              efficient solutions to technological challenges. I specialize in
              business application development and love working on complex
              projects that require ingenious solutions.
            </Highlight>
          </Text>
          <Text {...textProps}>
            I'm confident in my ability to contribute to any software
            development project. I'm committed to continuously expanding my
            knowledge and skills to keep up with the latest technologies and
            best practices.
          </Text>
        </VStack>
      </Stack>
      <Skills />
      <VStack {...socialNetworksProps}>
        <SocialNetworks />
      </VStack>
      <Box
        bgImage={mesh}
        position="absolute"
        w="full"
        h="full"
        className="mesh"
        bottom={0}
      />
    </Stack>
  );
}

const textProps: TextProps = {
  fontSize: '16px',
  textAlign: 'justify',
  fontWeight: 500,
};

const socialNetworksProps: StackProps = {
  display: 'flex',
  justifyContent: 'center',
  position: 'fixed',
  bottom: '0',
  left: '0',
  w: 'full',
  py: { base: 5, md: 8 },
};

const headingProps: HeadingProps = {
  as: 'h2',
  size: { base: 'md', md: 'lg' },
  color: '#ffffffa3',
  rounded: 'xl',
  py: 1,
};
