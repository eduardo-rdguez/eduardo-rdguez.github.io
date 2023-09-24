import { extendTheme } from '@chakra-ui/react';
import { bodyBackgroundColor, primaryTextColor } from './constants';

export const theme = extendTheme({
  fonts: {
    body: `Matter, sans-serif`,
    heading: `CalSans, sans-serif`,
  },
  styles: {
    global: () => ({
      body: {
        bg: bodyBackgroundColor,
        color: primaryTextColor,
        fontSize: { base: '12px', md: '16px' },
      },
    }),
  },
});
