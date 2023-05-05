import {
  Flex,
  Stack,
  StackProps,
  FlexProps,
  HStack,
  Heading,
  Box,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  BoxProps,
} from '@chakra-ui/react';
import '../styles.scss';

import TerminalBoxLineIcon from 'remixicon-react/TerminalBoxLineIcon';
import MenuLineIcon from 'remixicon-react/MenuLineIcon';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Flex {...flexHeaderProps}>
      <Flex {...flexLogoProps}>
        <Link to="/">
          <Box {...logoBoxProps}>
            <Icon as={TerminalBoxLineIcon} boxSize="20px" mr={2} />
            <Heading as="h1" size="sm">
              eduardo-rdguez
            </Heading>
          </Box>
        </Link>
        <Box className="terminal-cursor"></Box>
      </Flex>
      <Stack {...stackStartedProps}>
        <HStack spacing={8} display={{ base: 'none', md: 'flex' }}>
          <Link to="/about-me">
            <Box {...menuBoxProps}>About me</Box>
          </Link>
        </HStack>
        <HStack display={{ md: 'none' }}>
          <Menu placement="bottom-end" gutter={2}>
            <MenuButton
              as={IconButton}
              name="menu"
              icon={<MenuLineIcon />}
              bgColor="transparent"
              pr={0}
              _active={{
                bgColor: 'transparent',
              }}
              _hover={{
                bgColor: 'transparent',
              }}
            ></MenuButton>
            <MenuList
              bgColor="transparent"
              justifyContent="end"
              p={0}
              minW="0"
              w="100px"
            >
              <MenuItem
                bgColor="transparent"
                color="white"
                justifyContent="end"
              >
                <Link to="/about-me">About me</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Stack>
    </Flex>
  );
}

const logoBoxProps: BoxProps = {
  display: 'flex',
  _hover: {
    textDecoration: 'none',
  },
};

const flexHeaderProps: FlexProps = {
  minH: '80px',
  py: { base: 6, md: 10 },
  borderStyle: 'solid',
  alignItems: 'center',
};

const flexLogoProps = {
  flex: { base: 1 },
  justifyContent: 'start',
  alignItems: 'center',
};

const stackStartedProps: StackProps = {
  flex: { base: 1, md: 0 },
  justify: 'flex-end',
  direction: 'row',
  spacing: 6,
};

const menuBoxProps: BoxProps = {
  w: 'full',
  fontSize: '1rem',
  fontWeight: 700,
  whiteSpace: 'nowrap',
  _hover: {
    textDecoration: 'none',
  },
};
