import React from 'react';

import { Breadcrumb, BreadcrumbItem, Container, Flex } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

import { LogoHeader } from 'src/components/Logos';
import { links } from '../../routes/router';

const Header = () => (
  <Container maxW="container.md" my={5} as="header">
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
          <NavLink to={links.root.portfolio.path}>{links.root.portfolio.name}</NavLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <NavLink to={links.root.home.path}>{links.root.home.name}</NavLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <NavLink to={links.root.posts.path}>{links.root.posts.name}</NavLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <NavLink to="#!">About</NavLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Flex>
  </Container>
);

export default Header;
