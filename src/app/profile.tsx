import {
  GridItem,
  GridItemProps,
  Heading,
  Image,
  SimpleGrid,
  SimpleGridProps,
  Stack,
  StackProps,
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
          <VStack {...extractStackProps}>
            <Text {...textProps} color={secondaryTextColor}>
              Hi, my name's
            </Text>
            <Heading {...nameTextProps}>Eduardo.</Heading>
            <Heading {...positionTextProps}>I'm a Software Developer</Heading>
            <Text {...textProps}>
              I tend to make use of emerging technologies to build applications
              that look great, feel fantastic, and function correctly.
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

const extractStackProps: StackProps = {
  spacing: { base: 2, md: 6 },
  alignItems: 'flex-start',
};

const textProps: TextProps = {
  fontWeight: 600,
  textAlign: 'justify',
};

const nameTextProps: TextProps = {
  as: 'h2',
  size: { base: 'lg', md: '2xl' },
};

const profileGridProps: SimpleGridProps = {
  columns: 2,
  h: { base: '60vh', md: '70vh' },
  alignItems: 'center',
  spacing: { base: 6, md: 0 },
};

const positionTextProps: TextProps = {
  as: 'h2',
  size: { base: 'md', md: 'xl' },
  color: secondaryTextColor,
};

const gridImageProps: GridItemProps = {
  display: 'flex',
  justifyContent: { base: 'center', md: 'flex-end' },
  colSpan: { base: 2, md: 1 },
};
