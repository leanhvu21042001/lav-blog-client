import React from 'react';

import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from '@chakra-ui/modal';
import { Link } from 'react-router-dom';

import { Divider, Heading, List, ListItem } from '@chakra-ui/react';
import string from 'src/helpers/string';
import { AnimatedInputSearch } from '../Inputs';

export interface IResultSearch {
  href: string;
  title: string;
}

const MAX_SEARCH_RESULT = 5;

const ResultSearch: React.FC<{ data: IResultSearch[] }> = ({ data }) => {
  const listItem = data.slice(0, MAX_SEARCH_RESULT).map(({ href, title }) => (
    <>
      <ListItem>
        <Heading as="h4" size="sm" paddingY={4}>
          <Link to={href}>{string.makeShort(title, 6)}</Link>
        </Heading>
      </ListItem>
      <Divider orientation="horizontal" />
    </>
  ));

  return <List w="full">{listItem}</List>;
};

const ModalSearch: React.FC<{
  onSearch: (query: string) => void;
  posts: IResultSearch[];
}> = ({ onSearch, posts }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        colorScheme="teal"
        mb={10}
        size="lg"
        fontSize="1.8rem"
        padding="35px 30px"
        borderRadius="10px"
        fontWeight="bold"
      >
        Search
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <AnimatedInputSearch onSearch={onSearch} />
          </ModalBody>
          <ModalFooter>
            <ResultSearch data={posts} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalSearch;
