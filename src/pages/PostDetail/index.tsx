import React from 'react';

import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Box, Container, Heading, Text } from '@chakra-ui/react';

import PostService from 'src/services/post';
import { PostTags } from 'src/components';
import { IPostItem } from 'src/types/post';

const PostDetail = () => {
  const params = useParams();
  const postId = params?.id as string;
  const { data: post } = useQuery<IPostItem>(['get-one-post'], () => PostService.getOne(postId));

  return !post?.id ? (
    <Box>
      <Heading as="h1" size="2xl">
        Post unavailable!
      </Heading>
      <Heading as="h4" size="lg">
        Please reload the page or choose another post.
      </Heading>
    </Box>
  ) : (
    <Box id={post?.id}>
      <Heading as="h1">Hello</Heading>
      <Heading as="h2">{post?.title}</Heading>
      <PostTags tags={post?.tags} />
      <Container maxW="container.md" as="main" mt="20">
        <Text>{post?.content}</Text>
      </Container>
    </Box>
  );
};

export default PostDetail;
