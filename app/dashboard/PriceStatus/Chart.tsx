import ModuleBar from '@app/components/Charts/Bar';
import React, { useEffect, useState } from 'react';
import Filter from './Filter';
import { useDashboardStore } from '@app/store/dashboard';
import dayjs from 'dayjs';

interface IProps {
  chartData: any;
}

const ChartPriceStatus = (props: IProps) => {
  const { chartData } = props;
  const {
    priceStatus: { datePicker },
  } = useDashboardStore((state) => state);

  const [dateTitle, setDateTitle] = useState('월별');

  useEffect(() => {
    if (datePicker) {
      const currentDate: string = datePicker.values().next().value;
      const test = dayjs(currentDate).format('YYYY.MM');
      console.log({ test });
      setDateTitle(test);
    }
  }, [datePicker, dateTitle]);

  return (
    <div className=" flex w-[100%] flex-[0.45]">
      <ModuleBar title={`${dateTitle} 평균 수소충전소 판매 가격 현황`} data={chartData} />
      <Filter />
    </div>
  );
};

export default ChartPriceStatus;
