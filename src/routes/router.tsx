import React from 'react';

import { createBrowserRouter } from 'react-router-dom';

import Root from './root';
import Home from 'src/pages/Home';
import Login from 'src/pages/Login';
import PageNotFound from 'src/pages/PageNotFound';
import Posts from 'src/pages/Posts';
import Register from 'src/pages/Register';
import PostDetail from 'src/pages/PostDetail';

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

export default router;
