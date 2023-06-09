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
          I'm Eduardo and I'm {getMyCurrentAge()} years old. I joined the{' '}
          <Link href="https://www.makingdevs.com/" {...linkProps}>
            MakingDevs
          </Link>{' '}
          team in March 2022. I'm passionate about technology and innovative
          software solutions.
        </Text>
      </VStack>
      <VStack {...questionStackProps}>
        <Heading {...headingProps}>What do you do?</Heading>
        <Text {...textProps}>
          I'm a Software Developer. I currently work with{' '}
          <Link href="https://elixir-lang.org/" {...linkProps}>
            Elixir
          </Link>{' '}
          and{' '}
          <Link href="https://www.phoenixframework.org/" {...linkProps}>
            Phoenix Framework
          </Link>{' '}
          on a Real Estate Platform (REP).
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
          I'm most passionate about the technologies that we are using here at{' '}
          <Link href="https://www.makingdevs.com/" {...linkProps}>
            MakingDevs
          </Link>
          . That makes me want to learn more and keep up with building something
          greater.
        </Text>
      </VStack>
    </Stack>
  );

  function getMyCurrentAge(): number {
    const birthDate = new Date('1996-11-15');
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const diffMonths = today.getMonth() - birthDate.getMonth();

    if (
      diffMonths < 0 ||
      (diffMonths === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  }
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
