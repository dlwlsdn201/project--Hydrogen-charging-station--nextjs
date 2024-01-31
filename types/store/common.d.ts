export declare type TNavIdx = 'dashboard' | 'stationStatus' | 'stationSearch';

export declare interface ICommonState {
  navIdx: TNavIdx;
  changeNavIdx: (key: TNavIdx) => void;
  isLoading: boolean;
  changeIsLoading: (value: boolean) => void;
}
