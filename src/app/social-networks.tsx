import {
  Box,
  HStack,
  IconButton,
  IconButtonProps,
  Link,
  StackProps,
} from '@chakra-ui/react';

import GithubLineIcon from 'remixicon-react/GithubLineIcon';
import InstagramLineIcon from 'remixicon-react/InstagramLineIcon';
import LinkedinLineIcon from 'remixicon-react/LinkedinLineIcon';
import MailLineIcon from 'remixicon-react/MailLineIcon';

export default function SocialNetworks() {
  return (
    <Box>
      <HStack spacing={6} {...stackProps}>
        <Link href="https://github.com/eduardo-rdguez" target="_blank">
          <IconButton
            aria-label="github"
            icon={<GithubLineIcon />}
            {...iconButtonProps}
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/eduardo-peralta-rodriguez/"
          target="_blank"
        >
          <IconButton
            aria-label="linkedin"
            icon={<LinkedinLineIcon />}
            {...iconButtonProps}
          />
        </Link>
        <Link href="mailto:eduardoperaltardgz@gmail.com" target="_blank">
          <IconButton
            aria-label="mail"
            icon={<MailLineIcon />}
            {...iconButtonProps}
          />
        </Link>
        <Link href="https://www.instagram.com/ed.rdguez" target="_blank">
          <IconButton
            aria-label="instagram"
            icon={<InstagramLineIcon />}
            {...iconButtonProps}
          />
        </Link>
      </HStack>
    </Box>
  );
}

const iconButtonProps: Omit<IconButtonProps, 'aria-label'> = {
  rounded: 'full',
  bg: 'transparent',
  _hover: {
    borderWidth: '2px',
    color: 'white',
  },
};

const stackProps: StackProps = {
  mt: { base: 2, md: 0 },
  borderWidth: '2px',
  borderColor: 'white',
  rounded: 'full',
  px: 4,
};
