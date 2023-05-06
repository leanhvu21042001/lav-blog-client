import React, { useState } from 'react';

import ListPosts from 'src/components/ListPosts';
import ModalSearch, { IResultSearch } from 'src/components/Modals/ModalSearch';
import { Box } from '@chakra-ui/react';

import { links } from 'src/routes/router';
import { useGetPosts } from 'src/queries/post';

const Posts: React.FC = () => {
  const [dataSearch, setDataSearch] = useState<IResultSearch[]>([]);

  const { data: posts } = useGetPosts();

  const handleSearch = (query: string) => {
    const result: IResultSearch[] = posts
      .filter(({ title }) => title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
      .map((post) => ({
        ...post,
        href: links.root.post_detail.extend_path(post.id, post.slug),
      }));

    setDataSearch(result);
  };
  return (
    <>
      <ModalSearch onSearch={handleSearch} posts={dataSearch} />
      <Box>
        <ListPosts posts={posts} />
      </Box>
    </>
  );
};

export default Posts;
