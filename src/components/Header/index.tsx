import React from 'react';

import { Container, Flex } from '@chakra-ui/react';

import { LogoHeader } from 'src/components/Logos';
import { Menu } from '../Menu';

const Header = () => (
  <Container maxW="container.md" my={5} as="header">
    <Flex
      backgroundColor="rgba(255, 255, 255, 0.8)"
      backdropFilter="saturate(180%) blur(5px)"
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
