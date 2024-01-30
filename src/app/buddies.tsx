import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverTrigger,
  PopoverContentProps,
  ListItem,
  Link,
  UnorderedList,
  ButtonProps,
  Button,
  PopoverHeaderProps,
  Portal,
} from '@chakra-ui/react';
import '../styles.scss';
import { bodyBackgroundColor, secondaryTextColor } from './constants';

export default function Buddies() {
  return (
    <Popover placement="top" trigger="hover">
      <PopoverTrigger>
        <Button {...triggerTextProps}>amazing teams</Button>
      </PopoverTrigger>
      <Portal>
        <PopoverContent {...popoverContentProps}>
          <PopoverHeader {...popoverHeaderProps}></PopoverHeader>
          <PopoverBody pt={0}>
            <UnorderedList alignItems="flex-start" spacing={0}>
              <ListItem>
                <Link href="https://github.com/RamonEspinosa" target="_blank">
                  Juan Ramón Espinosa
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://github.com/gilboss" target="_blank">
                  Gilberto Reyes
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://github.com/JackMortDT" target="_blank">
                  Luis Sastré
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://github.com/Toboolf" target="_blank">
                  José Cruz
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://github.com/rodrigomg" target="_blank">
                  Rodrigo Martínez
                </Link>
              </ListItem>
            </UnorderedList>
          </PopoverBody>
        </PopoverContent>
      </Portal>
    </Popover>
  );
}

const triggerTextProps: ButtonProps = {
  variant: 'link',
  fontWeight: 700,
  color: secondaryTextColor,
};

const popoverHeaderProps: PopoverHeaderProps = {
  fontWeight: 'bold',
  border: 0,
  pt: 1,
};

const popoverContentProps: PopoverContentProps = {
  color: 'white',
  bg: bodyBackgroundColor,
  _focusVisible: {
    outline: 'none',
  },
};
