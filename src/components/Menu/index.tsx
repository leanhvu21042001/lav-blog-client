import { useBreakpointValue } from '@chakra-ui/react';
import React from 'react';
import Desktop from './Desktop';
import Mobile from './Mobile';

export const Menu = () => {
  const menu = useBreakpointValue({
    base: <Mobile />,
    lg: <Desktop />,
  });

  return <>{menu}</>;
};
