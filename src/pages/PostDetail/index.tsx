import React from 'react';

import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

import { PostTags } from 'src/components';
import SpinnerBox from 'src/components/SpinnerBox';
import { useGetPostBySlug } from 'src/queries/post';
import { checkData } from 'src/utils';

const PostDetail = () => {
  const params = useParams();
  const slug = params.slug as string;

  const { data: post, isFetching } = useGetPostBySlug(slug);

  if (isFetching) return <SpinnerBox />;

  return checkData.isEmptyData(post) ? (
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
