import NxWelcome from './nx-welcome';
import { ChakraProvider } from '@chakra-ui/react';

export function App() {
  return (
    <ChakraProvider>
      <NxWelcome title="eduardo-rdguez.github.io" />
    </ChakraProvider>
  );
}

export default App;
