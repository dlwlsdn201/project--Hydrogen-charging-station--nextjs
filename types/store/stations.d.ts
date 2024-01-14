import { TSearchType } from '@app/types/stations/filter';
/** 지역별 수소차 등록 현황 */

export declare interface IStationsState {
  changeInitialStationList: (payload: IStationObj[]) => void;

  initialData: {
    totalCount: number;
    stationsList: IStationObj[];
  };
  changeInitialStation: (payload: IApiResponse) => void;
  filteredData: {
    totalCount: number;
    stationsList: IStationObj[];
  };
  changeFilteredStation: (payload: IApiResponse) => void;
  filter: {
    searchType: TSearchType;
    searchValue: string;
  };
  changeSearchType: (payload: TSearchType) => void;
  changeSearchValue: (payload: string) => void;
}
