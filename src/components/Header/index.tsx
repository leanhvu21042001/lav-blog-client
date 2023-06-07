import React from 'react';

import { Container, Flex } from '@chakra-ui/react';

import { LogoHeader } from 'src/components/Logos';
import { Menu } from '../Menu';

const Header = () => (
  <Container maxW="container.lg" my={5} as="header">
    <Flex
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      fontWeight="bold"
      textTransform="uppercase"
      gap={5}
    >
      <LogoHeader />

      <Menu />
    </Flex>
  </Container>
);

export default Header;
