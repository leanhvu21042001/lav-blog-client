import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import React from 'react';

import authorPortfolio from 'src/assets/images/portfolio/author-portfolio.png';
import facebook from 'src/assets/images/social-media/facebook.svg';
import github from 'src/assets/images/social-media/github.svg';
import linkIn from 'src/assets/images/social-media/link-in.svg';

import html5 from 'src/assets/images/technical/html5.svg';
import javascript from 'src/assets/images/technical/javascript.svg';
import react from 'src/assets/images/technical/react.svg';
import sass from 'src/assets/images/technical/sass.svg';

import nodejs from 'src/assets/images/technical/nodejs.svg';
// import bootstrap from 'src/assets/images/technical/bootstrap.svg';
// import laravel from 'src/assets/images/technical/laravel.svg';
// import nestjs from 'src/assets/images/technical/nestjs.svg';
// import php from 'src/assets/images/technical/php.svg';

const Portfolio: React.FC = () => {
  return (
    <Grid templateColumns="3fr 3fr" gap={10}>
      <GridItem>
        <Image src={authorPortfolio} />
      </GridItem>
      <GridItem fontWeight="bold" mt={5}>
        <Box fontSize="36px">
          <Text as="span">Hi, I&apos;m </Text>
          <Text as="span" color="#BD6161">
            Raymond
          </Text>
        </Box>
        <Text color="#BD6161" fontSize="26px">
          Front-End Web Developer
        </Text>

        {/* Social Links */}
        <Box display="flex" gap={5} mt={10}>
          <Image src={linkIn} />
          <Image src={github} />
          <Image src={facebook} />
        </Box>
        {/* Technical */}

        <Box display="flex" flexWrap="wrap" gap={5} mt={10}>
          <Image src={html5} />
          <Image src={sass} />
          <Image src={javascript} />
          <Image src={react} />
          <Image src={nodejs} />

          {/* <Image src={laravel} />
          <Image src={php} />
          <Image src={bootstrap} />
          <Image src={nestjs} /> */}
        </Box>
      </GridItem>
    </Grid>
  );
};

export default Portfolio;
