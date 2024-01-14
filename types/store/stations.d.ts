import { TSearchType } from '@app/types/stations/filter';
import { IStationData } from '@app/types/stations/stations';

export interface IModalState {
  isOpen: boolean;
  data: IStationData;
}

export declare interface IStationsState {
  changeInitialStationList: (payload: IStationData[]) => void;

  initialData: {
    totalCount: number;
    stationsList: IStationData[];
  };
  changeInitialStation: (payload: IApiResponse) => void;
  filteredData: {
    totalCount: number;
    stationsList: IStationData[];
  };
  changeFilteredStation: (payload: IApiResponse) => void;
  filter: {
    searchType: TSearchType;
    searchValue: string;
  };
  changeSearchType: (payload: TSearchType) => void;
  changeSearchValue: (payload: string) => void;
  modal: IModalState;
  changeModal: (payload: {}) => void;
}
