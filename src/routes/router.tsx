import { AnimatePresence } from 'framer-motion';
import React from 'react';

import { BrowserRouter, createBrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import { Layout } from 'src/components/Layout';

import Home from 'src/pages/Home';
import Login from 'src/pages/Login';
import PageNotFound from 'src/pages/PageNotFound';
import Portfolio from 'src/pages/Portfolio';
import PostDetail from 'src/pages/PostDetail';
import Posts from 'src/pages/Posts';
import Register from 'src/pages/Register';

export const links = {
  root: {
    path: '',
    element: <Layout />,
    name: 'Root',
    portfolio: {
      path: '/',
      element: <Portfolio />,
      name: 'Portfolio',
    },
    home: {
      path: '/home',
      element: <Home />,
      name: 'Home',
    },
    posts: {
      path: 'posts',
      element: <Posts />,
      name: 'Posts',
    },
    post_detail: {
      extend_path: (id: number | string, slug: string) => `/post/${id}/${slug}`,
      path: '/post/:id/:slug',
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

export const router = createBrowserRouter([
  {
    path: links.root.path,
    element: links.root.element,
    errorElement: links.notFound.element,
    children: [
      {
        path: links.root.portfolio.path,
        element: links.root.portfolio.element,
      },
      {
        path: links.root.home.path,
        element: links.root.home.element,
      },
      {
        path: links.root.posts.path,
        element: links.root.posts.element,
      },
      {
        path: links.root.post_detail.path,
        element: links.root.post_detail.element,
      },
    ],
  },
  {
    path: links.root.login.path,
    element: links.root.login.element,
  },
  {
    path: links.root.register.path,
    element: links.root.register.element,
  },
]);

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
          <Route path={links.root.portfolio.path} element={<Portfolio />} />
          <Route path={links.root.home.path} element={<Home />} />
          <Route path={links.root.posts.path} element={<Posts />} />
          <Route path={links.root.post_detail.path} element={<PostDetail />} />
          <Route path={links.root.login.path} element={<Login />} />
          <Route path={links.root.register.path} element={<Register />} />
          <Route path={links.notFound.path} element={<PageNotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
