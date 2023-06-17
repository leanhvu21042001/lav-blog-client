import React, { useCallback, useState } from 'react';

import { SearchIcon } from '@chakra-ui/icons';
import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { debounce } from 'lodash';
import { DEBOUNCE_WAIT } from 'src/constants';

const AnimatedInputSearch: React.FC<{ onSearch: (query: string) => void }> = ({
  onSearch,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = useCallback(
    debounce((query: string) => {
      onSearch(query);
    }, DEBOUNCE_WAIT),
    [],
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query: string = event.target.value;
    setSearchQuery(query);
    handleSearch(query);
  };

  const handleInputFocus = () => {
    setIsExpanded(true);
  };

  const handleInputBlur = () => {
    setIsExpanded(false);
  };

  return (
    <Box position="relative">
      <InputGroup width="lg">
        <InputLeftElement pointerEvents="none" mt="25px" ms="20px">
          <SearchIcon height="35px" width="35px" />
        </InputLeftElement>
        <Input
          placeholder="Search..."
          size="lg"
          fontSize="1.8rem"
          borderRadius="full"
          padding="40px 80px"
          transition="width 0.4s ease"
          width={isExpanded ? '90%' : '50%'}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChange={handleInputChange}
          value={searchQuery}
        />
      </InputGroup>
    </Box>
  );
};

export default AnimatedInputSearch;
