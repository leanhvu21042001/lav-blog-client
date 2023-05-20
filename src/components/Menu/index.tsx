import React from 'react';

import { NavLink } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from '@chakra-ui/react';

import { links } from '../../routes/router';

export const Menu = () => (
  <Breadcrumb spacing="8px" separator="">
    <BreadcrumbItem>
      <NavLink to={links.root.portfolio.path}>{links.root.portfolio.name}</NavLink>
    </BreadcrumbItem>

    <BreadcrumbItem>
      <NavLink to={links.root.projects.path}>{links.root.projects.name}</NavLink>
    </BreadcrumbItem>

    <BreadcrumbItem>
      <NavLink to={links.root.blogs.path}>{links.root.blogs.name}</NavLink>
    </BreadcrumbItem>

    <BreadcrumbItem isCurrentPage>
      <NavLink to="#!">About</NavLink>
    </BreadcrumbItem>
  </Breadcrumb>
);
