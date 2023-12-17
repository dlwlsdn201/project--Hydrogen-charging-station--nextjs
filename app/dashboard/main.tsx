'use client';
import { Divider } from '@nextui-org/react';
import ChartRegStatus from './RegStatus/Chart';
import ChartPriceStatus from './PriceStatus/Chart';
import { useDashboardStore } from '@app/store/dashboard';
import { useEffect, useMemo } from 'react';
import { IPriceDataObj, IRegDataObj, TPriceChartDataKey, TRegChartDataKey } from '@app/types/dashboard/chart';
import { faker } from '@faker-js/faker';

interface IProps {
  apiResponse: {
    reg: {
      currentCount: number;
      data: Array<any>;
      matchCount: number;
      page: number;
      perPage: number;
      totalCount: number;
    };
    price: {
      currentCount: number;
      data: Array<any>;
      matchCount: number;
      page: number;
      perPage: number;
      totalCount: number;
    };
  };
}

const filterPriceLabel = (dataKeys: string[]) => dataKeys.filter((key) => key !== '구분');
const sortObjectByKeys = (obj: IRegDataObj | IPriceDataObj) => Object.keys(obj).sort();

const getLabel = (resData: IRegDataObj[] | IPriceDataObj[]): string[] => {
  let result: string[] = [];
  if (resData && resData.length > 0) {
    const sortedKeys = sortObjectByKeys(resData[0]);
    result = filterPriceLabel(sortedKeys);
  }
  return result;
};

const Dashboard = ({ apiResponse }: IProps) => {
  const { changeRegStatus, changePriceStatus, priceStatus } = useDashboardStore((state) => state);

  const isVaildData: boolean = apiResponse.reg?.data && apiResponse.reg.data.length > 0;

  // ==================================== 국내 수소차 등록 현황 차트 데이터 관리
  // 지역 Labels

  // '승용' | '승합' | '화물' 에 대한 legend 배열 만들어야함.
  const regStandardObj: IRegDataObj | false = isVaildData && apiResponse.reg.data[0];
  const regLegends: any[] = isVaildData
    ? Object.keys(regStandardObj).filter((key) => !['지역', '총합계'].includes(key))
    : [];

  const backgroundColors = ['rgb(142, 98, 231)', '#6fb26c', '#f0b44b'];

  const regDatasets = regLegends.map((legend: TRegChartDataKey, index: number) => ({
    label: legend,
    data: [],
    backgroundColor: backgroundColors[index],
    stack: `Stack 0`,
  }));

  // ==================  지역별 ['승용', '승합', '화물'] 키 값에 대한 데이터 값 할당
  const regChartData: Record<string, any> = {};
  regLegends.forEach((legend: TRegChartDataKey) => {
    regChartData[legend] = [];
  });

  apiResponse?.reg?.data.forEach((obj: IRegDataObj) => {
    regLegends.forEach((legend: TRegChartDataKey) => {
      regChartData[legend].push(obj[legend]);
    });
  });

  regDatasets.forEach((dataSet) => {
    const target = dataSet.label;

    dataSet.data = regChartData[target];
  });

  const regLabels = apiResponse.reg.data && apiResponse.reg.data.map((obj: IRegDataObj) => obj.지역);
  // ========================================================================

  // ==================================== 국내 지역별 수소 판매 가격 데이터 관리
  // const priceStandardObj: IPriceDataObj | false = isVaildData && apiResponse.price.data[0];
  const priceLegends: TPriceChartDataKey[] = ['가격 (원)'];
  const priceLabels = getLabel(apiResponse.price?.data);

  const selectedDate = useMemo(
    () => priceStatus?.datePicker && Array.from(priceStatus?.datePicker)[0],
    [priceStatus?.datePicker],
  );
  const getDataByDatePicker = ({ dateList, date }: { dateList: IPriceDataObj[]; date: string }) =>
    dateList.find((obj: IPriceDataObj) => obj['구분'] === date);
  let priceDataObj: IPriceDataObj | undefined = getDataByDatePicker({
    dateList: priceStatus?.data,
    date: selectedDate,
  });

  const priceData: any = [];
  if (priceDataObj !== undefined) {
    const priceChartDataKeys = Object.keys(priceDataObj).filter((key) => key !== '구분');
    priceChartDataKeys.forEach((key) => {
      if (priceDataObj) priceData.push(priceDataObj[key]);
      // if (priceDataObj) priceData[key] = priceDataObj[key];
    });
  }

  const priceDatasets = priceLegends.map((legend: TPriceChartDataKey) => ({
    label: legend,
    data: priceData,
    // datalabels: { color: 'rgb(86, 168, 255)' },
    // backgroundColor: faker.color.rgb({ casing: 'mixed', format: 'hex' }),
    backgroundColor: 'rgb(86, 168, 255)',
    stack: `Stack 0`,
  }));

  const chartData = {
    reg: {
      labels: regLabels,
      datasets: regDatasets,
    },
    price: {
      labels: priceLabels,
      datasets: priceDatasets,
    },
  };

  useEffect(() => {
    console.log('여기');
    changePriceStatus({
      ...priceStatus,
      totalCount: apiResponse.price.totalCount,
      data: apiResponse.price.data,
    });
    changeRegStatus({ totalCount: apiResponse.reg.totalCount, data: apiResponse.reg.data });
  }, [apiResponse, changePriceStatus, changeRegStatus]);

  return (
    <div className="flex flex-col justify-center items-center w-[60%]">
      {/* <Spinner label="loading..." color="success" /> */}
      <ChartRegStatus chartData={chartData?.reg} />
      <Divider className="my-2 mx-12 w-[50%]" style={{ border: '1px solid grey' }} />
      <ChartPriceStatus chartData={chartData?.price} />
    </div>
  );
};

export default Dashboard;
