import { Heading } from '@chakra-ui/react';
import React from 'react';

import Typewriter from 'src/components/Typewriter';

const Home: React.FC = () => {
  return (
    <div>
      <Heading as="h1" size="2xl" mb="10">
        <Typewriter text="Welcome to my blog!" delay={1} />
      </Heading>
      <Heading as="h4" size="md" style={{ wordSpacing: 5, lineHeight: 2 }}>
        <Typewriter
          text="I cover personal development, health and wellness, lifestyle, and more. My aim is to create engaging and inspiring content and provide a space for us to connect and share experiences. Enjoy exploring!"
          delay={1}
        />
      </Heading>
    </div>
  );
};

export default Home;
