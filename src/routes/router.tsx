import { AnimatePresence } from 'framer-motion';
import React from 'react';

import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';

import { Layout } from 'src/components/Layout';

import Login from 'src/pages/Login';
import PageNotFound from 'src/pages/PageNotFound';
import Portfolio from 'src/pages/Portfolio';
import PostDetail from 'src/pages/PostDetail';
import Posts from 'src/pages/Posts';
import Projects from 'src/pages/Projects';
import Register from 'src/pages/Register';

export const links = {
  root: {
    path: '',
    element: <Layout />,
    name: 'Root',
    home: {
      path: '/',
      element: <Navigate to="/portfolio" />,
      name: 'home',
    },
    portfolio: {
      path: '/portfolio',
      element: <Portfolio />,
      name: 'Portfolio',
    },
    projects: {
      path: '/projects',
      element: <Projects />,
      name: 'Projects',
    },
    blogs: {
      path: 'blogs',
      element: <Posts />,
      name: 'Blogs',
    },
    post_detail: {
      extend_path: (slug: string) => `/blogs/post/${slug}`,
      path: '/blogs/post/:slug',
      element: <PostDetail />,
    },
    register: {
      path: 'register',
      element: <Register />,
      name: 'Register',
    },
    login: {
      path: 'login',
      element: <Login />,
      name: 'Login',
    },
  },

  notFound: {
    path: '*',
    element: <PageNotFound />,
    name: 'PageNotFound',
  },
};

export const BrowserRouterCustom = () => {
  return (
    <BrowserRouter>
      <RoutesCustom />
    </BrowserRouter>
  );
};

export const RoutesCustom = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Layout />}>
          <Route
            path={links.root.home.path}
            element={links.root.home.element}
          />
          <Route
            path={links.root.portfolio.path}
            element={links.root.portfolio.element}
          />
          <Route
            path={links.root.projects.path}
            element={links.root.projects.element}
          />
          <Route
            path={links.root.blogs.path}
            element={links.root.blogs.element}
          />
          <Route
            path={links.root.post_detail.path}
            element={links.root.post_detail.element}
          />
          <Route
            path={links.root.login.path}
            element={links.root.login.element}
          />
          <Route
            path={links.root.register.path}
            element={links.root.register.element}
          />
          <Route path={links.notFound.path} element={links.notFound.element} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
