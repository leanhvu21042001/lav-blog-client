import React from 'react';

import { AbsoluteCenter, Box, Heading, Text } from '@chakra-ui/react';
import { useRouteError } from 'react-router-dom';

const PageNotFound: React.FC = () => {
  const error: any = useRouteError();

  return (
    <Box position="relative" h="100vh">
      <AbsoluteCenter axis="both">
        <Heading as="h1">Oops!</Heading>
        <Text>Sorry, an unexpected error has occurred.</Text>
        <Text>{error.statusText || error.message}</Text>
      </AbsoluteCenter>
    </Box>
  );
};
export default PageNotFound;
