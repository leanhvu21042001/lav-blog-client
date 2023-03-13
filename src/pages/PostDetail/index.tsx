import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { Box, Container, Heading, Text } from '@chakra-ui/react';

import { IPostItem, PostTags } from 'src/components';

import { posts } from '../Posts/posts.sampledata';

const PostDetail = () => {
  const params = useParams();
  const postId = params?.id;
  const [post, setPost] = useState<IPostItem | undefined>({
    id: '',
    content: '',
    title: '',
    tag: '',
    slug: '',
  });

  useEffect(() => {
    if (postId) {
      const postFound: IPostItem | undefined = posts.find((post) => post.id === postId);
      setPost(postFound);
    }
  }, [postId]);

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
      <PostTags tag={post?.tag} />
      <Container maxW="container.md" as="main" mt="20">
        <Text>{post?.content}</Text>
      </Container>
    </Box>
  );
};

export default PostDetail;
