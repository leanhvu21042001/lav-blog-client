import React from 'react';

import { Box, Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import { AnimatedPage } from '../AnimatedPage';
import Footer from '../Footer';
import Header from '../Header';

// import { ReactComponent as WaveSVG } from 'src/assets/images/common/wave-bottom.svg';

export const Layout = () => {
  return (
    <Box display="flex" flexDirection="column" height={{ lg: '100vh', sm: '100%' }} position="relative">
      <Header />
      <Container maxW="container.md" as="main" mt="20">
        <AnimatedPage>
          <Outlet />
        </AnimatedPage>
      </Container>

      {/* <Box position="absolute" width="100%" bottom={0} left={0} zIndex={-1}>
        <WaveSVG width="100%" />
      </Box> */}
      <Footer />
    </Box>
  );
};
