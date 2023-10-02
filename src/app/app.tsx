import { ChakraProvider } from '@chakra-ui/provider';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './home';
import AboutMe from './about-me';
import { theme } from './theme';
import { ReactNode } from 'react';
import { Grid } from '@chakra-ui/react';

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </ChakraProvider>
  );
}

const Layout = (props: { children: ReactNode }) => {
  return (
    <Grid h="100vh" w="100vw">
      {props.children}
    </Grid>
  );
};

export default App;
