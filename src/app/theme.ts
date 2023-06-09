import { extendTheme } from '@chakra-ui/react';
import { bodyBackgroundColor, primaryTextColor } from './constants';

export const theme = extendTheme({
  fonts: {
    body: `SourceCodeLight, sans-serif`,
    heading: `SourceCodeBold, sans-serif`,
  },
  styles: {
    global: () => ({
      body: {
        bg: bodyBackgroundColor,
        color: primaryTextColor,
        fontSize: { base: '14px', md: '16px' },
      },
    }),
  },
});
