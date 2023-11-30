import { IDashboardState, IPriceStatus, IRegStatus } from '@app/types/store/dashboard';
import { StoreApi, UseBoundStore, create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type {} from 'redux-devtools-extension';
import { produce } from 'immer';

export const useDashboardStore: UseBoundStore<StoreApi<any>> = create<any, [['zustand/devtools', IDashboardState]]>(
  devtools((set) => ({
    regStatus: {
      totalCount: 0,
      data: [],
    },
    changeRegStatus: (payload: IRegStatus) =>
      set({ regStatus: { totalCount: payload.totalCount, data: payload.data } }),
    priceStatus: {
      totalCount: 0,
      data: [],
      datePicker: new Set(['']),
    },

    changePriceDatePicker: (payload: any) =>
      set(
        produce((state: IDashboardState) => {
          state.priceStatus.datePicker = payload;
        }),
      ),
    changePriceStatus: (payload: IPriceStatus) =>
      set({ priceStatus: { totalCount: payload.totalCount, data: payload.data } }),
  })),
);

// export const useDashboardStore = devtools(dashboardStore);
