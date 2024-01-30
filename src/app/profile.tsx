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

import SocialMedia from './social-media';
import { secondaryTextColor } from './constants';

export default function Profile() {
  return (
    <SimpleGrid {...profileGridProps}>
      <GridItem colSpan={{ base: 2, md: 1 }}>
        <Stack>
          <VStack {...extractStackProps}>
            <Heading {...nameHeadingProps}>
              Hello! I'm Eduardo{' '}
              <span role="img" aria-label="wave" className="wave">
                👋
              </span>
            </Heading>
            <Heading {...roleHeadingProps}>Software Engineer</Heading>
            <Text {...textProps}>
              I actively embrace emerging technologies to build applications
              that stand out in terms of aesthetics, functionality, and
              reliability.
            </Text>
            <SocialMedia />
          </VStack>
        </Stack>
      </GridItem>
      <GridItem {...gridImageProps}>
        <Image
          src="https://eduardo-rdguez.s3.amazonaws.com/profile-picture.webp"
          alt="profile-picture"
          rounded="full"
          width="20em"
          height="20em"
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
  fontWeight: 500,
  textAlign: 'justify',
  fontSize: { base: 'md', md: 'lg' },
};

const nameHeadingProps: TextProps = {
  as: 'h2',
  size: { base: 'xl', md: 'lg' },
};

const profileGridProps: SimpleGridProps = {
  columns: 2,
  h: 'full',
  w: 'full',
  alignItems: 'center',
};

const roleHeadingProps: TextProps = {
  as: 'h2',
  size: { base: '2xl', md: '2xl' },
  color: secondaryTextColor,
};

const gridImageProps: GridItemProps = {
  display: 'flex',
  alignSelf: { base: 'flex-start', md: 'center' },
  justifyContent: { base: 'center', md: 'flex-end' },
  colSpan: { base: 2, md: 1 },
};
