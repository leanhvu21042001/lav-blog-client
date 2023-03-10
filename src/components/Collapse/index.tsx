import React from 'react';

import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { Box } from '@chakra-ui/layout';
import { Collapse as ChakraUICollapse } from '@chakra-ui/transition';

export const Collapse: React.FC<{ children: React.ReactNode; buttonContent?: string }> = ({
  children,
  buttonContent = 'Click Me',
}) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button onClick={onToggle}>{buttonContent}</Button>
      <ChakraUICollapse in={isOpen} animateOpacity>
        <Box p="40px" color="white" mt="4" bg="teal.500" rounded="md" shadow="md">
          {children}
        </Box>
      </ChakraUICollapse>
    </>
  );
};
