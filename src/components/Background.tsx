/* eslint-disable @next/next/no-img-element */
'use client';

import styled from 'styled-components';
import ImageBackground from '@/assets/images/background.png';

const Root = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  z-index: -1;
  opacity: 0.6;
`;

export default function Background() {
  return (
    <Root>
      <img alt="" width="9999" src={ImageBackground.src} />
    </Root>
  );
}
