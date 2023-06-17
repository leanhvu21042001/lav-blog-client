import { Box, Text } from '@chakra-ui/react';
import React from 'react';
// import Wave from '../Wave';
// import waveBottomBlue from 'src/assets/images/common/wave-bottom-blue.svg';
// import waveBottomWhite from 'src/assets/images/common/wave-bottom-white.svg';

const Footer: React.FC = () => {
  // const { colorMode } = useColorMode();

  return (
    <Box
      // bgImage={colorMode === 'light' ? waveBottomBlue : waveBottomWhite}
      // bgRepeat="no-repeat"
      // bgSize="cover"
      textAlign="center"
      padding={10}
    >
      <Text
        fontSize={20}
        fontWeight="bold"
        color="#BD6161"
        textShadow="0px 1px 2px #000"
      >
        LAV DEV
      </Text>
    </Box>
  );
};

export default Footer;
