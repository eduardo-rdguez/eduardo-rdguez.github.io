import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    body: `Matter, sans-serif`,
    heading: `CalSans, sans-serif`,
  },
  styles: {
    global: () => ({
      body: {
        bg: '#18191a',
        color: '#f2f2f2',
        fontSize: { base: '14px', md: '16px' },
      },
    }),
  },
});
