import { IStationData } from './stations';

export interface IApiResponse {
  page: number;
  perPage: number;
  totalCount: number;
  currentCount: number;
  matchCount: number;
  data: IStationData[];
}
