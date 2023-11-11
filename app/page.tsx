import { faker } from '@faker-js/faker';
import Dashboard from './dashboard/main';
import { READ_REG_STATUS_DATA } from './api/dashboard';
import { IDatasetKeys, IRegDataObj, TChartDataKey } from '@app/types/dashboard/chart';

const labels = {
  price: ['23년1월', '23년2월', '23년3월', '23년4월', '23년5월', '23년6월', '23년7월', '23년8월'],
  reg: ['전국', '서울', '경기', '경남', '전남', '전북', '경북', '제주'],
};

// ====== SAMPLE ======
const dataset: { [key: string]: Array<{ label: string; data: number[]; backgroundColor: string }> } = {
  reg: [],
  price: [],
};

export const data = {
  // reg: {
  //   labels: labels.reg,
  //   datasets: dataset.reg,
  // },
  price: {
    labels: labels.reg,
    datasets: [
      {
        label: '수소 판매 가격',
        // data: 2,
        data: labels.reg.map(() => faker.number.int({ min: 6000, max: 12000 })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      // {
      //   label: 'Dataset 2',
      //   // data: 2,
      //   data: labels.price.map(() => faker.number.int({ min: 0, max: 1000 })),
      //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
      // },
    ],
  },
};

const initRegStatusData = async () => {
  const regResponse = await READ_REG_STATUS_DATA();
  let data;
  if (regResponse.ok) {
    data = await regResponse.json();
  } else throw new Error('수소차 등록 현황 API 호출 실패');

  return data;
};

export default async function DashboardPage() {
  const result: { currentCount: number; data: IRegDataObj[] } = await initRegStatusData();
  const isVaildData: boolean = result?.data && result.data.length > 0;

  // ==================================== 국내 수소차 등록 현황 차트 데이터 관리
  // 지역 Labels
  const regLabels = result.data && result.data.map((obj: IRegDataObj) => obj.지역);
  // '승용' | '승합' | '화물' 에 대한 legend 배열 만들어야함.
  const sampleData: IRegDataObj | false = isVaildData && result.data[0];
  const regLegends: any[] = isVaildData
    ? Object.keys(sampleData).filter((key) => !['지역', '총합계'].includes(key))
    : [];

  const regDatasets = regLegends.map((legend: TChartDataKey) => ({
    label: legend,
    data: [],
    backgroundColor: faker.color.rgb({ casing: 'mixed', format: 'hex' }),
    stack: `Stack 0`,
  }));

  // ==================  지역별 ['승용', '승합', '화물'] 키 값에 대한 데이터 값 할당
  const regChartData: Record<string, any> = {};
  regLegends.forEach((legend: TChartDataKey) => {
    regChartData[legend] = [];
  });

  result.data.forEach((obj: IRegDataObj) => {
    regLegends.forEach((legend: TChartDataKey) => {
      regChartData[legend].push(obj[legend]);
    });
  });

  regDatasets.forEach((dataSet) => {
    const target = dataSet.label;

    dataSet.data = regChartData[target];
  });

  // ==================

  // ====================================

  const chartData = {
    reg: {
      labels: regLabels,
      datasets: regDatasets,
    },
    price: {
      labels: labels.reg,
      datasets: [
        {
          label: '수소 판매 가격',
          // data: 2,
          data: labels.price.map(() => faker.number.int({ min: 6000, max: 12000 })),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    },
  };
  return <Dashboard chartData={chartData} />;
}
