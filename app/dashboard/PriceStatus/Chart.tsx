import ModuleBar from '@app/components/Charts/Bar';
import React, { useEffect, useState } from 'react';
import Filter from './Filter';
import { useDashboardStore } from '@app/store/dashboard';
import dayjs from 'dayjs';
import { FlexCenterWrapper, FlexWrapper } from '@app/components/Modules/StyleComponents';

interface IProps {
  chartData: any;
  titleSize: number;
}

const ChartPriceStatus = (props: IProps) => {
  const { chartData, titleSize } = props;
  const {
    priceStatus: { datePicker },
  } = useDashboardStore((state) => state);

  const [dateTitle, setDateTitle] = useState<string>('월별');

  useEffect(() => {
    if (datePicker) {
      const currentDate: string = datePicker.values().next().value;
      const formattedDateTitle: string = currentDate ? dayjs(currentDate).format('YYYY.MM') : '월별';
      setDateTitle(formattedDateTitle);
    }
  }, [datePicker, dateTitle]);

  return (
    <div className=" flex mobile:w-[70%] tablet-sm:w-[100%] h-[50%] flex-[0.45] px-22 justify-center flex-col">
      <FlexCenterWrapper titleSize={titleSize}>{`${dateTitle} 평균 수소충전소 판매 가격 현황`}</FlexCenterWrapper>
      <FlexWrapper>
        <ModuleBar data={chartData} />
        <Filter />
      </FlexWrapper>
    </div>
  );
};

export default ChartPriceStatus;
