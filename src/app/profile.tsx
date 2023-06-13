import {
  GridItem,
  GridItemProps,
  Heading,
  Image,
  SimpleGrid,
  SimpleGridProps,
  Stack,
  Text,
  TextProps,
  VStack,
} from '@chakra-ui/react';

import SocialNetworks from './social-networks';
import { secondaryTextColor } from './constants';

export default function Profile() {
  return (
    <SimpleGrid {...profileGridProps}>
      <GridItem colSpan={{ base: 2, md: 1 }}>
        <Stack>
          <VStack spacing={{ base: 1, md: 6 }} alignItems="flex-start">
            <Text {...textProps} color={secondaryTextColor}>
              Hi, my name's
            </Text>
            <Heading {...nameTextProps}>Eduardo.</Heading>
            <Heading {...positionTextProps}>I'm a Software Developer</Heading>
            <Text {...textProps}>
              I tend to make use of emerging technologies to build application
              that looks great, feels fantastic, and functions correctly.
            </Text>
            <SocialNetworks />
          </VStack>
        </Stack>
      </GridItem>
      <GridItem {...gridImageProps}>
        <Image
          src="https://eduardo-rdguez.s3.amazonaws.com/profile-picture.webp"
          alt="profile-picture"
          rounded="full"
          className="profile-picture"
        />
      </GridItem>
    </SimpleGrid>
  );
}

const textProps: TextProps = {
  fontWeight: 600,
  textAlign: 'inherit',
};

const nameTextProps: TextProps = {
  as: 'h2',
  size: { base: 'xl', md: '4xl' },
};

const profileGridProps: SimpleGridProps = {
  columns: 2,
  h: { base: '60vh', md: '70vh' },
  alignItems: 'center',
  spacing: { base: 6, md: 0 },
};

const positionTextProps: TextProps = {
  as: 'h2',
  size: { base: 'lg', md: '2xl' },
  color: secondaryTextColor,
};

const gridImageProps: GridItemProps = {
  display: 'flex',
  justifyContent: { base: 'center', md: 'flex-end' },
  colSpan: { base: 2, md: 1 },
};
