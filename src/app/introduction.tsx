import {
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  TextProps,
  VStack,
} from '@chakra-ui/react';

import me from '../assets/me.jpg';
import SocialNetworks from './social-networks';

export default function Introduction() {
  return (
    <SimpleGrid
      columns={2}
      height="75vh"
      alignItems="center"
      spacing={{ base: 10, md: 0 }}
    >
      <GridItem colSpan={{ base: 2, md: 1 }}>
        <Stack>
          <VStack spacing={{ base: 3, md: 6 }} alignItems="flex-start">
            <Text {...textProps} color="#ffffffa3">
              Hi, my name's
            </Text>
            <Heading as="h3" size="4xl">
              Eduardo.
            </Heading>
            <Heading as="h2" size="2xl" color="#ffffffa3">
              I'm a Software Developer
            </Heading>
            <Text {...textProps}>
              I tend to make use of emerging technologies like to build
              application that looks great, feels fantastic, and functions
              correctly.
            </Text>
            <SocialNetworks />
          </VStack>
        </Stack>
      </GridItem>
      <GridItem
        display="flex"
        justifyContent={{ base: 'center', md: 'flex-end' }}
        colSpan={{ base: 2, md: 1 }}
      >
        <Image rounded="full" src={me} h={{ base: 300, md: 300, lg: 350 }} />
      </GridItem>
    </SimpleGrid>
  );
}

const textProps: TextProps = {
  fontWeight: 600,
  textAlign: 'justify',
};
