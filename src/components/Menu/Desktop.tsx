import React from 'react';

import { Breadcrumb, BreadcrumbItem, Button, Image, useColorMode } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

import dark from 'src/assets/images/header/dark.svg';
import light from 'src/assets/images/header/light.svg';
import { links } from 'src/routes/router';

const Desktop = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Breadcrumb spacing="8px" separator="" listProps={{ flexDirection: { base: 'column', lg: 'row' } }}>
      <BreadcrumbItem>
        <Button fontSize={20} fontWeight="bold" textTransform="uppercase" variant="ghost">
          <NavLink to={links.root.portfolio.path}>{links.root.portfolio.name}</NavLink>
        </Button>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <Button fontSize={20} fontWeight="bold" textTransform="uppercase" variant="ghost">
          <NavLink to={links.root.projects.path}>{links.root.projects.name}</NavLink>
        </Button>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <Button fontSize={20} fontWeight="bold" textTransform="uppercase" variant="ghost">
          <NavLink to={links.root.blogs.path}>{links.root.blogs.name}</NavLink>
        </Button>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <Button onClick={toggleColorMode} variant="ghost">
          {colorMode === 'light' ? <Image width={5} src={dark} /> : <Image width={5} src={light} />}
        </Button>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default Desktop;
