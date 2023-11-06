'use client';
import DashboardLayout from './layout';
import { TChartData } from '@app/types/charts';
import ChartRegStatus from './Charts/regStatus';
import ChartPriceStatus from './Charts/priceStatus';
import { Divider } from '@nextui-org/react';

interface IProps {
  chartData: {
    [key: string]: TChartData;
  };
}

const Dashboard = ({ chartData }: IProps) => {
  return (
    <DashboardLayout>
      <ChartRegStatus chartData={chartData?.reg} />
      <Divider className="my-12 mx-12 w-[50%]" style={{ border: '1px solid grey' }} />
      <ChartPriceStatus chartData={chartData?.price} />
    </DashboardLayout>
  );
};

export default Dashboard;
