import {
  GridItem,
  HStack,
  Heading,
  HeadingProps,
  Image,
  ImageProps,
  SimpleGrid,
  SimpleGridProps,
  Stack,
  StackProps,
  VStack,
} from '@chakra-ui/react';
import { secondaryTextColor } from './constants';

export default function Skills() {
  return (
    <Stack spacing={{ base: 2, md: 4 }}>
      <HStack justifyContent="center">
        <Heading {...headingProps}>Skills</Heading>
      </HStack>
      <SimpleGrid {...skillsGridProps}>
        <GridItem>
          <VStack {...badgesStackProps}>
            <Image
              src="https://img.shields.io/badge/Groovy-4298B8.svg?style=for-the-badge&logo=Apache+Groovy&logoColor=white"
              {...imageBadgesProps}
              alt="groovy-badge"
            />
            <Image
              src="https://img.shields.io/badge/Kotlin-%237F52FF.svg?style=for-the-badge&logo=kotlin&logoColor=white"
              {...imageBadgesProps}
              alt="kotlin-badge"
            />
            <Image
              src="https://img.shields.io/badge/Elixir-%234B275F.svg?style=for-the-badge&logo=elixir&logoColor=white"
              {...imageBadgesProps}
              alt="elixir-badge"
            />
            <Image
              src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white"
              {...imageBadgesProps}
              alt="java-badge"
            />
            <Image
              src="https://img.shields.io/badge/JavaScript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
              {...imageBadgesProps}
              alt="javascript-badge"
            />
            <Image
              src="https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=for-the-badge"
              {...imageBadgesProps}
              alt="typescript-badge"
            />
          </VStack>
        </GridItem>
        <GridItem>
          <VStack {...badgesStackProps}>
            <Image
              src="https://img.shields.io/badge/Spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white"
              {...imageBadgesProps}
              alt="spring-badge"
            />
            <Image
              src="https://img.shields.io/badge/Phoenix-F05423?style=for-the-badge&logo=phoenix&logoColor=white"
              {...imageBadgesProps}
              alt="phoenix-badge"
            />
            <Image
              src="https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
              {...imageBadgesProps}
              alt="react-badge"
            />
            <Image
              src="https://img.shields.io/badge/Vue.js-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D"
              {...imageBadgesProps}
              alt="vuejs-badge"
            />
            <Image
              src="https://img.shields.io/badge/Spock-1662AE?style=for-the-badge&logo=spock&logoColor=white"
              {...imageBadgesProps}
              alt="spock-badge"
            />
          </VStack>
        </GridItem>
        <GridItem>
          <VStack {...badgesStackProps}>
            <Image
              src="https://img.shields.io/badge/Git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"
              {...imageBadgesProps}
              alt="git-badge"
            />
            <Image
              src="https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white"
              {...imageBadgesProps}
              alt="jira-badge"
            />
            <Image
              src="https://img.shields.io/badge/Shell_Script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white"
              {...imageBadgesProps}
              alt="shellScript-badge"
            />
            <Image
              src="https://img.shields.io/badge/Docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"
              {...imageBadgesProps}
              alt="docker-badge"
            />
            <Image
              src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white"
              {...imageBadgesProps}
              alt="aws-badge"
            />
            <Image
              src="https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=Stripe&logoColor=white"
              {...imageBadgesProps}
              alt="stripe-badge"
            />
          </VStack>
        </GridItem>
        <GridItem>
          <VStack {...badgesStackProps}>
            <Image
              src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"
              {...imageBadgesProps}
              alt="postgresql-badge"
            />
            <Image
              src="https://img.shields.io/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white"
              {...imageBadgesProps}
              alt="oracle-badge"
            />
            <Image
              src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white"
              {...imageBadgesProps}
              alt="mysql-badge"
            />
          </VStack>
        </GridItem>
      </SimpleGrid>
    </Stack>
  );
}

const skillsGridProps: SimpleGridProps = {
  justifyItems: 'center',
  columns: { base: 2, md: 4 },
  spacing: { base: 5, md: 0 },
};

const imageBadgesProps: ImageProps = {
  rounded: 'md',
  height: 6,
};

const headingProps: HeadingProps = {
  as: 'h2',
  size: { base: 'md', md: 'lg' },
  color: secondaryTextColor,
  rounded: 'xl',
  py: 1,
};

const badgesStackProps: StackProps = {
  mt: 3,
  spacing: 2,
  alignItems: 'flex-start',
};
