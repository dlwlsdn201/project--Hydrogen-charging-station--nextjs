/** 지역별 수소차 등록 현황 */

export interface IPayloadRegStatus {
  지역: string;
  승용: number;
  승합: number;
  화물: number;
  총합계: number;
}

interface IChartDataObj {
  [key: string]: IPayloadPriceStatus | IPayloadRegStatus;
}
interface IRegStatus {
  totalCount: number;
  data: IChartDataObj[];
}

// 월별평균 수소충전소 월간 판매 가격 현황
interface IPayloadPriceStatus {
  구분: string;
  전국: number;
  서울: number;
  부산: number;
  대구: number;
  인천: number;
  광주: number;
  대전: number;
  울산: number;
  세종: number;
  경기: number;
  강원: number;
  충북: number;
  충남: number;
  전북: number;
  전남: number;
  경북: number;
  경남: number;
}

interface IPriceStatus {
  totalCount: number;
  data: IPriceStatusChartData[];
}

interface IChartDataState {
  totalCount: number;
  data: IPayloadRegStatus[] | IPayloadPriceStatus[];
}

export declare interface IDashboardState {
  regStatus: IChartDataState;
  changeRegStatus: (payload: IRegStatus) => void;
  priceStatus: IChartDataState;
  changePriceStatus: (payload: IRegStatus) => void;
}
