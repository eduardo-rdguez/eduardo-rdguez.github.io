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

interface SocialNetworksProps {
  stackProps?: StackProps;
}

export default function SocialNetworks(props: SocialNetworksProps) {
  const { stackProps } = props;

  return (
    <Box>
      <HStack {...customStackProps} {...stackProps}>
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
  color: 'white',
  _hover: {
    borderWidth: '2px',
  },
};

const customStackProps: StackProps = {
  spacing: 6,
  mt: { base: 4, md: 0 },
};
