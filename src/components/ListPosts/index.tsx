import { Button } from '@chakra-ui/button';
import { Card, CardBody, CardFooter, CardHeader } from '@chakra-ui/card';
import { Box, Heading, Text } from '@chakra-ui/layout';
import { Tag, TagLabel } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import string from 'src/helpers/string';

export interface IPostItem {
  id: string;
  title: string;
  content: string;
  tag: string;
}

const stringToColor = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    color += ('00' + value.toString(16)).substr(-2);
  }
  return color;
};

export const PostItem: React.FC<IPostItem> = ({ id, title = '', content = '', tag = '' }) => (
  <Card align="center" mb={10}>
    <CardHeader>
      <Heading size="md" as="h2">
        {title}
      </Heading>

      <Box>
        {tag.split(',').map((elm) => (
          <Tag key={elm} size="md" variant="solid" colorScheme={stringToColor(elm)}>
            <TagLabel>{elm}</TagLabel>
          </Tag>
        ))}
      </Box>
    </CardHeader>
    <CardBody>
      <Text>{string.makeShort(content, 20)}</Text>
    </CardBody>
    <CardFooter>
      <Button colorScheme="blue">
        <Link to={tag} state={id}>
          See more...
        </Link>
      </Button>
    </CardFooter>
  </Card>
);

const ListPosts: React.FC<{ posts: IPostItem[] }> = ({ posts = [] }) => {
  const postsElement = posts.map((post) => (
    <PostItem key={post.id} id={post.id} title={post.title} content={post.content} tag={post.tag} />
  ));

  return <>{postsElement}</>;
};

export default ListPosts;
