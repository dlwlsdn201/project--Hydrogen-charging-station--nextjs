import { ICommonState } from '@app/types/store/common';
import { StoreApi, UseBoundStore, create } from 'zustand';

export const useCommonStore: UseBoundStore<StoreApi<unknown>> = create(
  (set): ICommonState => ({
    navIdx: 'dashboard',
    changeNavIdx: (key) => set({ navIdx: key }),
  }),
);
