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
  MenuListProps,
  MenuButtonProps,
  MenuItemProps,
  HeadingProps,
} from '@chakra-ui/react';
import '../styles.scss';

import AtLineIcon from 'remixicon-react/AtLineIcon';
import MenuLineIcon from 'remixicon-react/MenuLineIcon';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Flex {...flexHeaderProps}>
      <Flex {...flexLogoProps}>
        <Link to="/">
          <Box {...logoBoxProps}>
            <Icon as={AtLineIcon} boxSize="18px" />
            <Heading {...headingProps}>eduardo-rdguez</Heading>
          </Box>
        </Link>
        <Box className="terminal-cursor"></Box>
      </Flex>
      <Stack {...menuStackProps}>
        <HStack {...linkStackProps}>
          <Link to="/about-me">
            <Box {...menuBoxProps}>About me</Box>
          </Link>
        </HStack>
        <HStack display={{ md: 'none' }}>
          <Menu placement="bottom-end" gutter={2}>
            <MenuButton
              id="menu-button"
              name="menu-button"
              aria-label="menu-button"
              as={IconButton}
              icon={<MenuLineIcon />}
              {...menuButtonProps}
            ></MenuButton>
            <MenuList {...menuListProps}>
              <MenuItem {...menuItemProps}>
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
  alignItems: 'center',
  _hover: {
    textDecoration: 'none',
  },
};

const flexHeaderProps: FlexProps = {
  pt: { base: '2em', md: '3em' },
  alignItems: 'center',
};

const flexLogoProps = {
  flex: { base: 1 },
  justifyContent: 'start',
  alignItems: 'center',
};

const headingProps: HeadingProps = {
  as: 'h1',
  size: { base: 'xs', md: 'sm' },
};

const menuStackProps: StackProps = {
  flex: { base: 1, md: 0 },
  justify: 'flex-end',
  direction: 'row',
  spacing: 6,
};

const linkStackProps: StackProps = {
  display: { base: 'none', md: 'flex' },
  spacing: 8,
};

const menuBoxProps: BoxProps = {
  w: 'full',
  fontSize: '1rem',
  fontWeight: 500,
  whiteSpace: 'nowrap',
  _hover: {
    textDecoration: 'none',
  },
};

const menuButtonProps: MenuButtonProps = {
  color: 'white',
  bgColor: 'transparent',
  pr: 0,
  _active: {
    bgColor: 'transparent',
  },
  _hover: {
    bgColor: 'transparent',
  },
};

const menuListProps: MenuListProps = {
  bgColor: 'transparent',
  justifyContent: 'end',
  minW: '0',
  w: 'auto',
  p: 0,
};

const menuItemProps: MenuItemProps = {
  bgColor: 'transparent',
  color: 'white',
  justifyContent: 'end',
};
