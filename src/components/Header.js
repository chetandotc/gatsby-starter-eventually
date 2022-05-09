import React from 'react';

import config from '../../config';

export default function Footer() {
  return (
    <header id="header">
      <h1>Che<span style={{color: 'darkgrey'}}>tan<span style={{color: 'white'}}>x</span></span><sub style={{fontSize: '0.4em'}}>sinx.cosx</sub></h1>
      <p>{config.subHeading}</p>
    </header>
  );
}
