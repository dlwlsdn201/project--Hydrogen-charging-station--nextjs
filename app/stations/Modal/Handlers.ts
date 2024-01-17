import { IWorkTimeDaily } from '@app/types/stations/modal';
import { IStationData } from '@app/types/stations/stations';

/** 월~일 각각 영업 시작, 종료 시간에 대한 데이터를 Table UI source 형식으로 반환해주는 핸들러 함수  */
export const getWorkTimeDaily = (data: IStationData): IWorkTimeDaily[] => {
  let result: IWorkTimeDaily[] = [];
  const weekdays: string[] = ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일', '공휴일'];

  if (data) {
    result = weekdays.map((day: string): IWorkTimeDaily => {
      const dataKeys: string[] = Object.keys(data);
      const targetTimeFields: string[] = dataKeys.filter((key) => key.includes(day));
      let start: string = '-';
      let end: string = '-';

      targetTimeFields.forEach((timeKey: string): void => {
        if (timeKey.includes('시작')) start = data[timeKey];
        if (timeKey.includes('종료')) end = data[timeKey];
      });

      return { week: day, start, end };
    });
  }

  return result;
};
