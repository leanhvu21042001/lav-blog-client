import React from 'react';

import { Box, Button, Grid, GridItem, Image, Text, Tooltip } from '@chakra-ui/react';

import { Link } from 'react-router-dom';
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
    <React.Fragment>
      <Grid templateColumns="3fr 3fr" gap={10}>
        <GridItem>
          <Image borderRadius={25} src={authorPortfolio} />
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
            <Tooltip label="Go to LinkedIn">
              <Link to="https://www.linkedin.com/in/lavdev/" target="_blank">
                <Image src={linkIn} />
              </Link>
            </Tooltip>

            <Tooltip label="Go to Github">
              <Link to="https://github.com/leanhvu21042001" target="_blank">
                <Image src={github} />
              </Link>
            </Tooltip>

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

      <Tooltip label="Send mail">
        <Button
          mt={5}
          backgroundColor="#BD6161"
          color="#fff"
          _hover={{
            background: 'white',
            color: 'teal.500',
          }}
        >
          Contact me
        </Button>
      </Tooltip>

      <Tooltip label="Download CV">
        <Button
          mt={5}
          ml={2}
          backgroundColor="#BD6161"
          color="#fff"
          _hover={{
            background: 'white',
            color: 'teal.500',
          }}
        >
          Curriculum Vitae
        </Button>
      </Tooltip>
    </React.Fragment>
  );
};

export default Portfolio;
