import React, { useState } from 'react';

import ListPosts, { IPostItem } from 'src/components/ListPosts';
import ModalSearch from 'src/components/Modals/ModalSearch';
import { Box } from '@chakra-ui/react';

import { posts } from './data.sample';

const Posts: React.FC = () => {
  const [data, setData] = useState<IPostItem[]>(posts);

  const handleSearch = (query: string) => {
    const result = posts.filter(({ title }) => title.toLocaleLowerCase().includes(query.toLocaleLowerCase()));

    console.log(result);

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
