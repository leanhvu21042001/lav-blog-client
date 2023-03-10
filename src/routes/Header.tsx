import React from 'react';

import { NavLink } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Container, Flex } from '@chakra-ui/react';

import { LogoHeader } from 'src/components/Logos';

const Header: React.FC = () => (
  <Container maxW="container.md" as="header">
    <Flex
      backgroundColor="rgba(255, 255, 255, 0.8)"
      backdropFilter="saturate(180%) blur(5px)"
      w="100%"
      justifyContent="space-between"
      alignItems="center"
    >
      <LogoHeader />

      <Breadcrumb spacing="8px" separator="">
        <BreadcrumbItem>
          <BreadcrumbLink href="#">
            <NavLink to="/">Home</NavLink>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">
            <NavLink to="posts">Posts</NavLink>
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">About</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Flex>
  </Container>
);

export default Header;
