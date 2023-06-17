import React from 'react';

import { Box, Heading, Text } from '@chakra-ui/react';
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
      {/* <Heading as="h1">Hello</Heading> */}
      <Heading as="h2" fontSize="1.7rem">
        {post?.title}
      </Heading>
      <PostTags tags={post?.tags} />
      <Text fontSize="1.5rem">{post?.content}</Text>
    </Box>
  );
};

export default PostDetail;
