import { StoreApi, UseBoundStore, create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type {} from 'redux-devtools-extension';
import { IStationsState } from '@app/types/store/stations';
import { IApiResponse } from '@app/types/stations/api';
// import { produce } from 'immer';

export const useStationsStore: UseBoundStore<StoreApi<any>> = create<any, [['zustand/devtools', IStationsState]]>(
  devtools((set) => ({
    filteredData: {
      filteredTotalCount: 0,
      stationsList: [],
    },
    initialData: {
      totalCount: 0,
      stationsList: [],
    },
    changeInitialStation: (payload: IApiResponse) =>
      set({ initialData: { totalCount: payload.totalCount, stationsList: payload.data } }),
    changeFilteredStation: (payload: IApiResponse) =>
      set({ filteredData: { totalCount: payload.totalCount, stationsList: payload.data } }),
  })),
);
