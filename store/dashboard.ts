import { IDashboardState } from '@app/types/store/dashboard';
import { StoreApi, UseBoundStore, create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type {} from 'redux-devtools-extension';

export const useDashboardStore: UseBoundStore<StoreApi<unknown>> = create<
  IDashboardState,
  [['zustand/devtools', IDashboardState]]
>(
  devtools((set) => ({
    regStatus: {
      totalCount: 0,
      data: [],
    },
    changeRegStatus: (payload: IregStatus) =>
      set({ regStatus: { totalCount: payload.totalCount, data: payload.data } }),
    priceStatus: {
      totalCount: 0,
      data: [],
    },
    changePriceStatus: (payload) => set({ regStatus: { totalCount: payload.totalCount, data: payload.data } }),
  })),
);

// export const useDashboardStore = devtools(dashboardStore);
