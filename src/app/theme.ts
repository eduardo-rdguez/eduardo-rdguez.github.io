import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    body: `Matter, cursive`,
    heading: `CalSans, cursive`,
  },
  styles: {
    global: () => ({
      body: {
        bg: '#18191a',
        color: '#f2f2f2',
      },
    }),
  },
});
