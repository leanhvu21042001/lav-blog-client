import React from 'react';

import { createBrowserRouter } from 'react-router-dom';

import Root from './root';
import Home from 'src/pages/Home';
import Login from 'src/pages/Login';
import PageNotFound from 'src/pages/PageNotFound';
import Posts from 'src/pages/Posts';
import Register from 'src/pages/Register';

export const links = {
  root: {
    path: '',
    element: <Root />,
    name: 'Root',

    home: {
      path: '/',
      element: <Home />,
      name: 'Home',
    },
    posts: {
      path: 'posts',
      element: <Posts />,
      name: 'Posts',
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

const router = createBrowserRouter([
  {
    path: links.root.path,
    element: links.root.element,
    errorElement: links.notFound.element,
    children: [
      {
        path: links.root.home.path,
        element: links.root.home.element,
      },
      {
        path: links.root.posts.path,
        element: links.root.posts.element,
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
  {
    path: links.notFound.path,
    element: links.notFound.element,
  },
]);

export default router;
