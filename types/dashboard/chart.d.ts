export type TRegRegionLabels = '강원' | '경기' | '경남' | '경북' | '광주' | '대구' | '대전' | '부산' | '서울' | '세종';

export type TRegChartDataKey = '승용' | '승합' | '화물';
export type TPriceChartDataKey = '가격';

export interface IRegDataObj {
  승용: number;
  승합: number;
  화물: number;
  총합계?: number;
  지역?: TRegRegionLabels;
}

// --- 국내 수소 판매 가격 ---

export interface IPriceData {
  강원: number;
  경기: number;
  경남: number;
  경북: number;
  광주: number;
  구분: string;
  대구: number;
  대전: number;
  부산: number;
  서울: number;
  세종: number;
  울산: number;
  인천: number;
  전국: number;
  전남: number;
  전북: number;
  충남: number;
  충북: number;
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
