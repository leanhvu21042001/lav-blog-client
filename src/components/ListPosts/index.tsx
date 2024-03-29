import { Button } from '@chakra-ui/button';
import { Card, CardBody, CardFooter, CardHeader } from '@chakra-ui/card';
import { Center, Heading, Text } from '@chakra-ui/layout';
import { Tag, TagLabel } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import string from 'src/helpers/string';
import { links } from 'src/routes/router';
import { IPostItem } from 'src/types/post';
import { random } from 'src/utils';

const TAG_COLORS = ['#93CFE9', '#45A48C', '#91619D', '#B06C59', '#cc4860'];

export const PostTags: React.FC<{ tags: string }> = ({ tags }) => {
  const tagsMapped = tags.split(',').map((elm) => {
    const color = TAG_COLORS[random.getRandomIntInclusive(0, 3)];
    return (
      <Tag
        key={elm}
        size="md"
        variant="solid"
        bg={color}
        color="#fff"
        mr={3}
        padding="10px 15px"
      >
        <TagLabel fontSize="1.3rem">{elm}</TagLabel>
      </Tag>
    );
  });
  return <>{tagsMapped}</>;
};

export const PostItem: React.FC<IPostItem> = ({
  title = '',
  content = '',
  tags = '',
  slug = '',
}) => (
  <Card align="center" mb={10}>
    <CardHeader>
      <Heading size="md" as="h3" mb={5} fontSize="1.7rem">
        {title}
      </Heading>

      <Center>
        <PostTags tags={tags} />
      </Center>
    </CardHeader>
    <CardBody>
      <Text fontSize="1.7rem">{string.makeShort(content, 20)}</Text>
    </CardBody>
    <CardFooter>
      <Button
        colorScheme="blue"
        size="lg"
        fontSize="1.6rem"
        padding="30px 20px"
      >
        <Link to={links.root.post_detail.extend_path(slug)}>See more...</Link>
      </Button>
    </CardFooter>
  </Card>
);

const ListPosts: React.FC<{ posts: IPostItem[] }> = ({ posts = [] }) => {
  const postsElement = posts.map((post) => (
    <PostItem
      key={post.id}
      id={post.id}
      title={post.title}
      content={post.content}
      tags={post.tags}
      slug={post.slug}
    />
  ));

  return <>{postsElement}</>;
};

export default ListPosts;
