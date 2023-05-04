import { Box, BoxProps, Text } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box {...footerBoxProps}>
      <Text>© {getCurrentYear()} All rights reserved.</Text>
    </Box>
  );

  function getCurrentYear(): number {
    const currentDate = new Date();
    return currentDate.getFullYear();
  }
}

const footerBoxProps: BoxProps = {
  display: 'flex',
  justifyContent: 'center',
  position: 'fixed',
  bottom: '0',
  left: '0',
  w: 'full',
  py: { base: 5, md: 8 },
};
