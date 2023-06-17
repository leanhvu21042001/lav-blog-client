import React, { useState } from 'react';

import { Box } from '@chakra-ui/react';

import ListPosts from 'src/components/ListPosts';
import ModalSearch, { IResultSearch } from 'src/components/Modals/ModalSearch';
import SpinnerBox from 'src/components/SpinnerBox';

import { useGetPosts } from 'src/queries/post';
import { links } from 'src/routes/router';
import { checkData } from 'src/utils';

const Posts: React.FC = () => {
  const [dataSearch, setDataSearch] = useState<IResultSearch[]>([]);

  const { data: posts, isFetching } = useGetPosts();

  const handleSearch = (query: string) => {
    const result: IResultSearch[] = posts
      .filter(({ title }) =>
        title.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
      )
      .map((post) => ({
        ...post,
        href: links.root.post_detail.extend_path(post.slug),
      }));

    setDataSearch(result);
  };

  if (isFetching) return <SpinnerBox />;

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
