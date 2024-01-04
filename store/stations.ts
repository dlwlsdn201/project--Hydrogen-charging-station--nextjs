import { StoreApi, UseBoundStore, create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type {} from 'redux-devtools-extension';
import { IStationsState } from '@app/types/store/stations';
import { IApiResponse } from '@app/types/stations/api';
// import { produce } from 'immer';

export const useStationsStore: UseBoundStore<StoreApi<any>> = create<any, [['zustand/devtools', IStationsState]]>(
  devtools((set) => ({
    data: {
      totalCount: 0,
      stationsList: [],
    },
    changeStations: (payload: IApiResponse) =>
      set({ data: { totalCount: payload.totalCount, stationsList: payload.data } }),
  })),
);
