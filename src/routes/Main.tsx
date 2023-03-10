import React from 'react';

import { Container } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

const Main: React.FC = () => (
  <Container maxW="container.md" as="main" mt="20">
    <Outlet />
  </Container>
);

export default Main;
