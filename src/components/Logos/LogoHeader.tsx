import React from 'react';

import { Image } from '@chakra-ui/image';
import { Link } from 'react-router-dom';

import lavLogo from 'src/assets/images/lav-logo-zip-file/svg/logo-color.svg';
import { links } from 'src/routes/router';

/**
 * * Create from : https://app.logo.com/business-name
 * List name of logo: ['logo-black', 'logo-color', 'logo-no-background', 'logo-white']
 */

const LogoHeader: React.FC = () => {
  return (
    <Link to={links.root.portfolio.path}>
      <Image src={lavLogo} w="200px" borderRadius="100%" />
    </Link>
  );
};

export default LogoHeader;
