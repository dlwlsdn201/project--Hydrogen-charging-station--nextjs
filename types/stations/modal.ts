export type IModalDataKey =
  | '지번주소'
  | '도로명주소'
  | '전화번호'
  | '판매가격'
  | '충전가능차량'
  | '충전소_관리번호'
  | '충전소_유형명'
  | '충전소_유형코드'
  | '요일별 영업시간'
  | '휴식_시간';

export interface IWorkTimeDaily {
  week: string;
  start: string;
  end: string;
}
