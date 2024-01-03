'use client';

import React, { useEffect, useState } from 'react';
// import Search from './Search';
// import TableList from './TableList';
import dynamic from 'next/dynamic';
import KakaoMap from './Map/KakaoMap';
import { IApiResponse } from '@app/types/stations/api';
const Search = dynamic(() => import('./Search'), { ssr: false });
const TableList = dynamic(() => import('./TableList'), { ssr: false });
interface IProps {
  apiResponse: IApiResponse;
}

export interface IUserLocation {
  lat: number;
  lng: number;
}

const Stations = ({ apiResponse }: IProps) => {
  const [userLocation, setUserLocation] = useState<IUserLocation>({
    lat: 35.5549546,
    lng: 129.2801509,
  });

  useEffect(() => {
    if ('geolocation' in navigator) {
      /* 위치정보 사용 가능 */
      navigator.geolocation.getCurrentPosition((success) => {
        const { coords } = success;
        setUserLocation({ lat: coords?.latitude, lng: coords?.longitude });
      });
    } else {
      alert('사용자의 위치 정보를 불러올 수 없습니다.');
      /* 위치정보 사용 불가능 */
    }
  }, []);

  return (
    <div key="1" className="flex flex-col h-full w-full">
      {/* <header className="flex items-center justify-between p-4 bg-white border-b-2">
        <div className="flex items-center gap-4">
          <MapIcon className="w-6 h-6" />
          <h1 className="text-lg font-semibold">Locations Map</h1>
        </div>
      </header> */}
      <main className="flex-grow p-4">
        <div className="grid grid-cols-3 gap-4 h-full">
          <div className="col-span-2 relative">
            <KakaoMap userLocation={userLocation} stationList={apiResponse?.data} />
          </div>
          <aside className="col-span-1">
            <Search />
            <TableList />
          </aside>
        </div>
      </main>
    </div>
  );
};

// function MapIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
//       <line x1="9" x2="9" y1="3" y2="18" />
//       <line x1="15" x2="15" y1="6" y2="21" />
//     </svg>
//   );
// }

export default Stations;
