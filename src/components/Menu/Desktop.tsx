import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Image,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import dark from 'src/assets/images/header/dark.svg';
import light from 'src/assets/images/header/light.svg';
import { links } from 'src/routes/router';
import WaveLineAnimation from './WaveLineAnimation';

const Desktop = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const location = useLocation();

  console.log({ location });
  return (
    <Breadcrumb
      spacing="8px"
      separator=""
      listProps={{ flexDirection: { base: 'column', lg: 'row' } }}
    >
      <BreadcrumbItem mb={5}>
        <Button
          fontSize="1.8rem"
          fontWeight="bold"
          textTransform="uppercase"
          variant="ghost"
          size="lg"
          flexDirection="column"
        >
          <NavLink to={links.root.portfolio.path}>
            {links.root.portfolio.name}
          </NavLink>
          {location.pathname.includes(links.root.portfolio.path) && (
            <WaveLineAnimation />
          )}
        </Button>
      </BreadcrumbItem>

      <BreadcrumbItem mb={5}>
        <Button
          fontSize="1.8rem"
          fontWeight="bold"
          textTransform="uppercase"
          variant="ghost"
          size="lg"
          flexDirection="column"
        >
          <NavLink to={links.root.projects.path}>
            {links.root.projects.name}
          </NavLink>
          {location.pathname.includes(links.root.projects.path) && (
            <WaveLineAnimation />
          )}
        </Button>
      </BreadcrumbItem>

      <BreadcrumbItem mb={5}>
        <Button
          fontSize="1.8rem"
          fontWeight="bold"
          textTransform="uppercase"
          variant="ghost"
          size="lg"
          flexDirection="column"
        >
          <NavLink to={links.root.blogs.path}>{links.root.blogs.name}</NavLink>
          {location.pathname.includes(links.root.blogs.path) && (
            <WaveLineAnimation />
          )}
        </Button>
      </BreadcrumbItem>

      <BreadcrumbItem mb={5}>
        <Button onClick={toggleColorMode} variant="ghost">
          {colorMode === 'light' ? (
            <Image width="30px" src={dark} />
          ) : (
            <Image width="30px" src={light} />
          )}
        </Button>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default Desktop;
