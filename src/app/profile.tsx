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

import SocialNetworks from './social-networks';

export default function Profile() {
  return (
    <SimpleGrid
      columns={2}
      h={{ base: '60vh', md: '70vh' }}
      alignItems="center"
      spacing={{ base: 6, md: 0 }}
    >
      <GridItem colSpan={{ base: 2, md: 1 }}>
        <Stack>
          <VStack spacing={{ base: 2, md: 6 }} alignItems="flex-start">
            <Text {...textProps} color="#ffffffa3">
              Hi, my name's
            </Text>
            <Heading as="h2" size={{ base: '2xl', md: '4xl' }}>
              Eduardo.
            </Heading>
            <Heading as="h2" size={{ base: 'lg', md: '2xl' }} color="#ffffffa3">
              I'm a Software Developer
            </Heading>
            <Text {...textProps}>
              I tend to make use of emerging technologies to build application
              that looks great, feels fantastic, and functions correctly.
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
        <Image
          rounded="full"
          src="https://eduardo-rdguez.s3.amazonaws.com/profile-picture.webp"
          alt="profile-picture"
          w={{ base: '15rem', md: '20rem', lg: '20em' }}
        />
      </GridItem>
    </SimpleGrid>
  );
}

const textProps: TextProps = {
  fontWeight: 600,
  textAlign: 'inherit',
};
