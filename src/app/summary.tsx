import {
  VStack,
  Heading,
  HeadingProps,
  Link,
  LinkProps,
  Stack,
  StackProps,
  Text,
  TextProps,
} from '@chakra-ui/react';

import { secondaryTextColor } from './constants';

export default function Summary() {
  return (
    <Stack {...summaryStackProps}>
      <VStack {...questionStackProps}>
        <Heading {...headingProps}>Who are you?</Heading>
        <Text {...textProps}>
          I'm Eduardo a Software Developer with 4+ years of experience, I've
          contributed to numerous successful software projects by delivering
          efficient, reliable code and high-performance.
        </Text>
      </VStack>
      <VStack {...questionStackProps}>
        <Heading {...headingProps}>What do you do?</Heading>
        <Text {...textProps}>
          I'm presently leveraging{' '}
          <Link href="https://elixir-lang.org/" {...linkProps}>
            Elixir
          </Link>{' '}
          and the powerful{' '}
          <Link href="https://www.phoenixframework.org/" {...linkProps}>
            Phoenix Framework
          </Link>{' '}
          to enhance and maintain a Real Estate Platform with a presence in the
          US.
        </Text>
      </VStack>
      <VStack {...questionStackProps}>
        <Heading {...headingProps}>Do you know what you're good at?</Heading>
        <Text {...textProps}>
          I know I'm good at what I'm doing now. My results can prove it
          anytime. I'm confident in my ability to contribute to any software
          development project. Also, I'm committed to continuously expanding my
          knowledge and skills to keep up with the latest technologies and best
          practices.
        </Text>
      </VStack>
      <VStack {...questionStackProps}>
        <Heading {...headingProps}>
          What aspects are you passionate about?
        </Heading>
        <Text {...textProps}>
          I'm most passionate about the technologies I've been using recently.
          That makes me want to learn more and keep up with building something
          greater.
        </Text>
      </VStack>
    </Stack>
  );
}

const summaryStackProps: StackProps = {
  justifyContent: 'center',
  spacing: { base: 6, md: 8 },
  mt: { base: 0, md: 4 },
};

const questionStackProps: StackProps = {
  spacing: { base: 4, md: 6 },
  alignItems: 'flex-start',
};

const headingProps: HeadingProps = {
  as: 'h2',
  size: { base: 'md', md: 'md' },
  color: secondaryTextColor,
  py: 1,
};

const textProps: TextProps = {
  fontSize: '16px',
  textAlign: 'justify',
  fontWeight: 500,
};

const linkProps: LinkProps = {
  fontWeight: 700,
  target: '_blank',
};
