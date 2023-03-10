import { Button } from '@chakra-ui/button';
import { Card, CardBody, CardFooter, CardHeader } from '@chakra-ui/card';
import { Center, Heading, Text } from '@chakra-ui/layout';
import { Tag, TagLabel } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import string from 'src/helpers/string';
import { links } from 'src/routes/router';
import { random } from 'src/utils';

export interface IPostItem {
  id: string;
  title: string;
  content: string;
  tag: string;
  slug: string;
}

const TAG_COLORS = ['#93CFE9', '#45A48C', '#91619D', '#B06C59', '#cc4860'];

export const PostItem: React.FC<IPostItem> = ({ id, title = '', content = '', tag = '', slug = '' }) => (
  <Card align="center" mb={10}>
    <CardHeader>
      <Heading size="md" as="h2" mb={5}>
        {title}
      </Heading>

      <Center>
        {tag.split(',').map((elm) => {
          const color = TAG_COLORS[random.getRandomIntInclusive(0, 3)];
          return (
            <Tag key={elm} size="md" variant="solid" bg={color} color="#fff" mr={3}>
              <TagLabel>{elm}</TagLabel>
            </Tag>
          );
        })}
      </Center>
    </CardHeader>
    <CardBody>
      <Text>{string.makeShort(content, 20)}</Text>
    </CardBody>
    <CardFooter>
      <Button colorScheme="blue">
        <Link to={links.root.post_detail.extend_path(id, slug)}>See more...</Link>
      </Button>
    </CardFooter>
  </Card>
);

const ListPosts: React.FC<{ posts: IPostItem[] }> = ({ posts = [] }) => {
  const postsElement = posts.map((post) => (
    <PostItem key={post.id} id={post.id} title={post.title} content={post.content} tag={post.tag} slug={post.slug} />
  ));

  return <>{postsElement}</>;
};

export default ListPosts;
