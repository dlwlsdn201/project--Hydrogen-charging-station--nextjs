'use client';

import React, { useEffect, useState } from 'react';
// import Search from './Search';
// import TableList from './TableList';
import dynamic from 'next/dynamic';
import KakaoMap from './Map/KakaoMap';
import { IApiResponse } from '@app/types/stations/api';
import { useStationsStore } from '@app/store/stations';
import { IStationData } from '@app/types/stations/stations';
import {
  filteredByStationName,
  filteredByStreetNumberAddress,
  sortDataByAddress,
  sortDataByStationName,
} from './Handlers';
import { ScrollShadow, Spacer } from '@nextui-org/react';
import TableHeader from './Table/Header';
import { TSearchType } from '@app/types/stations/filter';
import InfoModal from './Modal/index';
const Search = dynamic(() => import('./Search'), { ssr: false });
const TableList = dynamic(() => import('./Table'), { ssr: false });

interface IProps {
  apiResponse: IApiResponse;
}

export interface IUserLocation {
  lat: number;
  lng: number;
}

const Stations = ({ apiResponse }: IProps) => {
  const { initialData, changeInitialStation, changeFilteredStation, filter } = useStationsStore((state) => state);
  const [userLocation, setUserLocation] = useState<IUserLocation>({
    lat: 35.5549546,
    lng: 129.2801509,
  });

  /** 검색 유형 필터에 따른 데이터 필터링 함수 */
  const getFilteredDataBySearchType = ({ type, searchText }: { type: TSearchType; searchText: string }) => {
    let result: IStationData[] = [];
    const isStationNameType = type === 'station';
    result = initialData?.stationsList.filter((station: IStationData) => {
      const isMatched = isStationNameType
        ? filteredByStationName({ station, searchText })
        : filteredByStreetNumberAddress({ station, searchText });
      return isMatched;
    });

    return isStationNameType ? sortDataByStationName(result) : sortDataByAddress(result);
  };

  // 💡 일단 default 로 지번 기준으로 검색 (추후 충전소명/주소명 옵션 필터 구현 필요 ❗️)
  const handleSearch = (searchText: string): void => {
    // 1. 필터링하기
    const filteredStations = getFilteredDataBySearchType({ type: filter?.searchType, searchText });
    const filteredTotalCount = filteredStations.length;
    // 2. state update 하기
    changeFilteredStation({
      data: filteredStations,
      totalCount: filteredTotalCount,
    });
  };

  /** Table 리스트에서 특정 item 클릭 시, 해당 item 에 대한 좌표로 지도 중심을 이동시키기 위한 좌표 state update 함수 */
  const handleCenterLocation = ({ lat, lng }: { lat: number; lng: number }): void => {
    setUserLocation({ lat, lng });
  };

  useEffect(() => {
    // 충전소 데이터 리스트 초기화
    const initStationsData = (apiResponse: IApiResponse) => {
      changeInitialStation(apiResponse);
      changeFilteredStation(apiResponse);
    };
    initStationsData(apiResponse);

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
  }, [apiResponse, changeFilteredStation, changeInitialStation]);

  return (
    <div key="1" className="flex flex-col h-full w-full">
      <main className="flex-grow p-4">
        <div className="grid grid-cols-5 gap-4 h-full">
          <div className="col-span-3 relative">
            <KakaoMap userLocation={userLocation} handleCenterLocation={handleCenterLocation} />
          </div>
          <aside className="col-span-2 overflow-y-hidden">
            <Search onSearch={handleSearch} />
            <Spacer y={4} />
            <TableHeader />
            {/* offset: Shadow 시작 시점 */}
            <ScrollShadow hideScrollBar size={120} offset={0} className="h-[90%]">
              <TableList handleCenterLocation={handleCenterLocation} />
            </ScrollShadow>
          </aside>
        </div>
        <InfoModal />
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
