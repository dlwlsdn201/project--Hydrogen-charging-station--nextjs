export type TRegRegionLabels = '강원' | '경기' | '경남' | '경북' | '광주' | '대구' | '대전' | '부산' | '서울' | '세종';

export type TRegChartDataKey = '승용' | '승합' | '화물';
export type TPriceChartDataKey = '가격 (원)';

export interface IRegDataObj {
  승용: number;
  승합: number;
  화물: number;
  총합계?: number;
  지역?: TRegRegionLabels;
}

export interface IPriceDataObj {
  구분: string;
  [key: string]: number;
}

export interface IDatasetKeys {
  label: string;
  data: number[];
  backgroundColor: string;
  stack: 'Stack 0' | 'Stack 1';
}
