export declare type TNavIdx = 'dashboard' | 'stationStatus' | 'stationSearch';

export declare interface ICommonState {
  navIdx: TNavIdx;
  changeNavIdx: (key: TNavIdx) => void;
}
