import { StoreApi, UseBoundStore, create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type {} from 'redux-devtools-extension';
import { IStationsState } from '@app/types/store/stations';
// import { produce } from 'immer';

export const useStationsStore: UseBoundStore<StoreApi<any>> = create<any, [['zustand/devtools', IStationsState]]>(
  devtools((set) => ({
    data: {
      totalCount: 0,
      stationsList: [],
    },
    changeStations: (payload: { totalCount: number; stationsList: IStationObj[] }) =>
      set({ data: { totalCount: payload.totalCount, stationsList: payload.stationsList } }),
  })),
);
