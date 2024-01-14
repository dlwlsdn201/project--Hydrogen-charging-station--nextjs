import { StoreApi, UseBoundStore, create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type {} from 'redux-devtools-extension';
import { IStationsState } from '@app/types/store/stations';
import { IApiResponse } from '@app/types/stations/api';
import { TSearchType } from '@app/types/stations/filter';
// import { produce } from 'immer';

export const useStationsStore: UseBoundStore<StoreApi<any>> = create<any, [['zustand/devtools', IStationsState]]>(
  devtools((set) => ({
    initialData: {
      totalCount: 0,
      stationsList: [],
    },
    changeInitialStation: (payload: IApiResponse) =>
      set({ initialData: { totalCount: payload.totalCount, stationsList: payload.data } }),
    filteredData: {
      filteredTotalCount: 0,
      stationsList: [],
    },
    changeFilteredStation: (payload: IApiResponse) =>
      set({ filteredData: { totalCount: payload.totalCount, stationsList: payload.data } }),
    filter: {
      searchType: 'address',
      searchValue: '',
    },
    changeSearchType: (payload: TSearchType) => set({ filter: { searchType: payload } }),
    changeSearchValue: (payload: string) => set({ filter: { searchValue: payload } }),
  })),
);
