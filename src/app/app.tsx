import { ChakraProvider } from '@chakra-ui/react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './home';
import AboutMe from './about-me';
import { theme } from './theme';

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
