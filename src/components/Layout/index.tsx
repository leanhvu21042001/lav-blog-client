import React from 'react';

import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import { AnimatedPage } from '../AnimatedPage';
import Header from '../Header';

export const Layout = () => {
  return (
    <>
      <Header />
      <Container maxW="container.md" as="main" mt="20">
        <AnimatedPage>
          <Outlet />
        </AnimatedPage>
      </Container>
    </>
  );
};
