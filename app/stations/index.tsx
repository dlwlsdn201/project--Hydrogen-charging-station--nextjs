'use client';

import React from 'react';
import KakaoMap from './KakaoMap';

const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&autoload=false`;
console.log({ KAKAO_SDK_URL });
const Stations = ({}) => {
  return (
    <>
      <KakaoMap />
    </>
  );
};

export default Stations;
