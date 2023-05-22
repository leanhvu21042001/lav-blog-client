import React, { useState } from 'react';

import { Box, Spinner } from '@chakra-ui/react';
import ListPosts from 'src/components/ListPosts';
import ModalSearch, { IResultSearch } from 'src/components/Modals/ModalSearch';

import { useGetPosts } from 'src/queries/post';
import { links } from 'src/routes/router';
import { checkData } from 'src/utils';

const Posts: React.FC = () => {
  const [dataSearch, setDataSearch] = useState<IResultSearch[]>([]);

  const { data: posts, isLoading } = useGetPosts();

  const handleSearch = (query: string) => {
    const result: IResultSearch[] = posts
      .filter(({ title }) => title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
      .map((post) => ({
        ...post,
        href: links.root.post_detail.extend_path(post.slug),
      }));

    setDataSearch(result);
  };

  if (isLoading) {
    return <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />;
  }

  return (
    <>
      <ModalSearch onSearch={handleSearch} posts={dataSearch} />

      {checkData.isEmptyData(posts) ? (
        <Box>No posts</Box>
      ) : (
        <Box>
          <ListPosts posts={posts} />
        </Box>
      )}
    </>
  );
};

export default Posts;
