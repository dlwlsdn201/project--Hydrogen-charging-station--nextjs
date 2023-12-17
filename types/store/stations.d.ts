/** 지역별 수소차 등록 현황 */

export declare interface IStationsState {
  data: {
    totalCount: number;
    stationsList: IStationObj[];
  };
  changeStationsList: (payload: IStationObj[]) => void;
}
