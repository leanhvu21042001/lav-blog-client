import React, { useState } from 'react';

import ListPosts from 'src/components/ListPosts';
import ModalSearch, { IResultSearch } from 'src/components/Modals/ModalSearch';
import { Box } from '@chakra-ui/react';

import { posts } from './posts.sampledata';
import { links } from 'src/routes/router';

const Posts: React.FC = () => {
  const [data, setData] = useState<IResultSearch[]>([]);

  const handleSearch = (query: string) => {
    const result: IResultSearch[] = posts
      .filter(({ title }) => title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
      .map((post) => ({
        ...post,
        href: links.root.post_detail.extend_path(post.id, post.slug),
      }));

    setData(result);
  };
  return (
    <>
      <ModalSearch onSearch={handleSearch} posts={data} />
      <Box>
        <ListPosts posts={posts} />
      </Box>
    </>
  );
};

export default Posts;
