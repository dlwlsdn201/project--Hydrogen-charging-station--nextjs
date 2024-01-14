// ======= 검색 필터링 데이터 반환 핸들러 함수

import { IStationData } from '@app/types/stations/stations';

// 1. 충전소명
export const filteredByStationName = ({
  station,
  searchText,
}: {
  station: IStationData;
  searchText: string;
}): boolean => {
  let result: boolean = true;

  if (searchText) result = typeof station?.충전소_명 === 'string' && station?.충전소_명.includes(searchText);
  return result;
};
// 2. 주소명 (지번 주소, 지역)
export const filteredByStreetNumberAddress = ({
  station,
  searchText,
}: {
  station: IStationData;
  searchText: string;
}): boolean => {
  let result: boolean = true;

  if (searchText) result = typeof station?.지번주소 === 'string' && station?.지번주소.includes(searchText);
  return result;
};

export const sortDataByStationName = (dataList: IStationData[]) =>
  dataList.sort((a: IStationData, b: IStationData) => (a['충전소_명'] > b['충전소_명'] ? 1 : -1));

export const sortDataByAddress = (dataList: IStationData[]) =>
  dataList.sort((a: IStationData, b: IStationData) => (a['지번주소'] > b['지번주소'] ? 1 : -1));
