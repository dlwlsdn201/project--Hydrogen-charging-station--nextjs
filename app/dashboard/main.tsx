'use client';
import DashboardLayout from './layout';
import { TChartData } from '@app/types/charts';
import { Divider, Spinner } from '@nextui-org/react';
import ChartRegStatus from './RegStatus/Chart';
import ChartPriceStatus from './PriceStatus/Chart';
import { useDashboardStore } from '@app/store/dashboard';
import { useEffect } from 'react';
import { IDashboardState } from '@app/types/store/dashboard';

interface IProps {
  chartData: {
    [key: string]: TChartData;
  };
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

const Dashboard = ({ chartData, apiResponse }: IProps) => {
  const { changeRegStatus, changePriceStatus } = useDashboardStore((state) => state);

  useEffect(() => {
    changePriceStatus({ totalCount: apiResponse.price.totalCount, data: apiResponse.price.data });
    changeRegStatus({ totalCount: apiResponse.reg.totalCount, data: apiResponse.reg.data });
  }, [apiResponse, changePriceStatus, changeRegStatus]);

  return (
    <DashboardLayout>
      {/* <Spinner label="loading..." color="success" /> */}
      <ChartRegStatus chartData={chartData?.reg} />
      <Divider className="my-2 mx-12 w-[50%]" style={{ border: '1px solid grey' }} />
      <ChartPriceStatus chartData={chartData?.price} />
    </DashboardLayout>
  );
};

export default Dashboard;
