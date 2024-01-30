import {
  Badge,
  BadgeProps,
  HStack,
  Image,
  ImageProps,
  Stack,
  StackProps,
  Text,
  TextProps,
} from '@chakra-ui/react';

export default function TechStack() {
  return (
    <Stack spacing={8}>
      <Stack>
        <HStack>
          <Badge {...badgeHeadingProps}>Skills</Badge>
        </HStack>
        <Text {...textProps}>
          My technology stack is made up of these languages and tools, but I
          don't limit myself to learning or applying any other.
        </Text>
      </Stack>
      <Stack>
        <HStack {...badgesHStackProps}>
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
            src="https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=white&style=for-the-badge"
            {...imageBadgesProps}
            alt="typescript-badge"
          />
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
            src="https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=fff&style=for-the-badge"
            {...imageBadgesProps}
            alt="npm-badge"
          />
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
            src="https://img.shields.io/badge/Scrum-009FDA?logo=scrumalliance&logoColor=white&style=for-the-badge"
            {...imageBadgesProps}
            alt="scrum-badge"
          />
          <Image
            src="https://img.shields.io/badge/iTerm2-000?logo=iterm2&logoColor=white&style=for-the-badge"
            {...imageBadgesProps}
            alt="iterm-badge"
          />
          <Image
            src="https://img.shields.io/badge/VSCode-007ACC?logo=visualstudiocode&logoColor=white&style=for-the-badge"
            {...imageBadgesProps}
            alt="vscode-badge"
          />
          <Image
            src="https://img.shields.io/badge/SonarQube-4E9BCD?logo=sonarqube&logoColor=white&style=for-the-badge"
            {...imageBadgesProps}
            alt="sonarqube-badge"
          />
          <Image
            src="https://img.shields.io/badge/OpenAPI-6BA539?logo=openapiinitiative&logoColor=fff&style=for-the-badge"
            {...imageBadgesProps}
            alt="openapi-badge"
          />
          <Image
            src="https://img.shields.io/badge/Postman-FF6C37?logo=postman&logoColor=fff&style=for-the-badge"
            {...imageBadgesProps}
            alt="postman-badge"
          />
        </HStack>
      </Stack>
    </Stack>
  );
}

const badgeHeadingProps: BadgeProps = {
  as: 'h2',
  textTransform: 'none',
  fontSize: 'md',
};

const badgesHStackProps: StackProps = {
  flexWrap: 'wrap',
  justifyContent: { base: 'center', md: 'space-between' },
};

const imageBadgesProps: ImageProps = {
  height: 6,
};

const textProps: TextProps = {
  fontSize: '16px',
  textAlign: 'justify',
  fontWeight: 500,
};
