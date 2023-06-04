import React from 'react';
import wave from 'src/assets/images/common/wave.png';

import './wave.scss';

const Wave: React.FC = () => {
  return (
    <section className="section-wave">
      <div className="wave wave1" style={{ backgroundImage: `url(${wave})` }}></div>
      <div className="wave wave2" style={{ backgroundImage: `url(${wave})` }}></div>
      <div className="wave wave3" style={{ backgroundImage: `url(${wave})` }}></div>
      <div className="wave wave4" style={{ backgroundImage: `url(${wave})` }}></div>
    </section>
  );
};

export default Wave;
