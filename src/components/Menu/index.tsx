import React from 'react';

import { Breadcrumb, BreadcrumbItem, Button, Image, useColorMode } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

import dark from 'src/assets/images/header/dark.svg';
import light from 'src/assets/images/header/light.svg';
import { links } from 'src/routes/router';

export const Menu = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Breadcrumb spacing="8px" separator="">
      <BreadcrumbItem>
        <Button variant="ghost">
          <NavLink to={links.root.portfolio.path}>{links.root.portfolio.name}</NavLink>
        </Button>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <Button variant="ghost">
          <NavLink to={links.root.projects.path}>{links.root.projects.name}</NavLink>
        </Button>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <Button variant="ghost">
          <NavLink to={links.root.blogs.path}>{links.root.blogs.name}</NavLink>
        </Button>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <Button variant="ghost">
          <NavLink to="#!">About</NavLink>
        </Button>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <Button onClick={toggleColorMode} variant="ghost">
          {colorMode === 'light' ? <Image src={dark} /> : <Image src={light} />}
        </Button>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};
