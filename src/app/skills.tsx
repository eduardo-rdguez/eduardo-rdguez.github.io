import {
  GridItem,
  HStack,
  Heading,
  HeadingProps,
  Image,
  ImageProps,
  SimpleGrid,
  Stack,
  VStack,
} from '@chakra-ui/react';

export default function Skills() {
  return (
    <Stack spacing={{ base: 2, md: 4 }}>
      <HStack justifyContent="center">
        <Heading {...headingProps}>Skills</Heading>
      </HStack>
      <SimpleGrid columns={3} justifyItems="center">
        <GridItem>
          <VStack mt={5} spacing={2} alignItems="flex-start">
            <Image
              src="https://img.shields.io/badge/Groovy-4298B8.svg?style=flat-square&logo=Apache+Groovy&logoColor=white"
              {...imageBadgesProps}
              alt="groovy-badge"
            />
            <Image
              src="https://img.shields.io/badge/Kotlin-%237F52FF.svg?style=flat-square&logo=kotlin&logoColor=white"
              {...imageBadgesProps}
              alt="kotlin-badge"
            />
            <Image
              src="https://img.shields.io/badge/Elixir-%234B275F.svg?style=flat-square&logo=elixir&logoColor=white"
              {...imageBadgesProps}
              alt="elixir-badge"
            />
            <Image
              src="https://img.shields.io/badge/Java-ED8B00?style=flat-square&logo=openjdk&logoColor=white"
              {...imageBadgesProps}
              alt="java-badge"
            />
            <Image
              src="https://img.shields.io/badge/Javascript-%23323330.svg?style=flat-square&logo=javascript&logoColor=%23F7DF1E"
              {...imageBadgesProps}
              alt="javascript-badge"
            />
            <Image
              src="https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square"
              {...imageBadgesProps}
              alt="typeScript-badge"
            />
            <Image
              src="https://img.shields.io/badge/SQL-005C84.svg?style=flat-square&logo=sql&logoColor=white"
              {...imageBadgesProps}
              alt="sql-badge"
            />
          </VStack>
        </GridItem>
        <GridItem>
          <VStack mt={5} spacing={2} alignItems="flex-start">
            <Image
              src="https://img.shields.io/badge/Spring-%236DB33F.svg?style=flat-square&logo=spring&logoColor=white"
              {...imageBadgesProps}
              alt="spring-badge"
            />
            <Image
              src="https://img.shields.io/badge/Phoenix-F05423?style=flat-square&logo=phoenix&logoColor=white"
              {...imageBadgesProps}
              alt="phoenix-badge"
            />
            <Image
              src="https://img.shields.io/badge/React-%2320232a.svg?style=flat-square&logo=react&logoColor=%2361DAFB"
              {...imageBadgesProps}
              alt="react-badge"
            />
            <Image
              src="https://img.shields.io/badge/Vue.js-%2335495e.svg?style=flat-square&logo=vuedotjs&logoColor=%234FC08D"
              {...imageBadgesProps}
              alt="vue-badge"
            />
          </VStack>
        </GridItem>
        <GridItem>
          <VStack mt={5} spacing={2} alignItems="flex-start">
            <Image
              src="https://img.shields.io/badge/Git-%23F05033.svg?style=flat-square&logo=git&logoColor=white"
              {...imageBadgesProps}
              alt="git-badge"
            />
            <Image
              src="https://img.shields.io/badge/Jira-0052CC?style=flat-square&logo=Jira&logoColor=white"
              {...imageBadgesProps}
              alt="jira-badge"
            />
            <Image
              src="https://img.shields.io/badge/Shell_Script-%23121011.svg?style=flat-square&logo=gnu-bash&logoColor=white"
              {...imageBadgesProps}
              alt="shellScript-badge"
            />
            <Image
              src="https://img.shields.io/badge/Docker-%230db7ed.svg?style=flat-square&logo=docker&logoColor=white"
              {...imageBadgesProps}
              alt="docker-badge"
            />
            <Image
              src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=flat-square&logo=amazon-aws&logoColor=white"
              {...imageBadgesProps}
              alt="aws-badge"
            />
          </VStack>
        </GridItem>
      </SimpleGrid>
    </Stack>
  );
}

const imageBadgesProps: ImageProps = {
  rounded: 'md',
  height: 6,
};

const headingProps: HeadingProps = {
  as: 'h2',
  size: { base: 'md', md: 'lg' },
  color: '#ffffffa3',
  rounded: 'xl',
  py: 1,
};
