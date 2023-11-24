import { faker } from '@faker-js/faker';
import Dashboard from './dashboard/main';
import { READ_PRICE_STATUS_DATA, READ_REG_STATUS_DATA } from './api/dashboard';
import { IPriceDataObj, IRegDataObj, TChartDataKey } from '@app/types/dashboard/chart';

const labels = {
  price: ['23년1월', '23년2월', '23년3월', '23년4월', '23년5월', '23년6월', '23년7월', '23년8월'],
  reg: ['전국', '서울', '경기', '경남', '전남', '전북', '경북', '제주'],
};

// ====== SAMPLE ======
// const dataset: { [key: string]: Array<{ label: string; data: number[]; backgroundColor: string }> } = {
//   reg: [],
//   price: [],
// };

// export const data = {
//   // reg: {
//   //   labels: labels.reg,
//   //   datasets: dataset.reg,
//   // },
//   price: {
//     labels: labels.reg,
//     datasets: [
//       {
//         label: '수소 판매 가격',
//         // data: 2,
//         data: labels.reg.map(() => faker.number.int({ min: 6000, max: 12000 })),
//         backgroundColor: 'rgba(255, 99, 132, 0.5)',
//       },
//       // {
//       //   label: 'Dataset 2',
//       //   // data: 2,
//       //   data: labels.price.map(() => faker.number.int({ min: 0, max: 1000 })),
//       //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
//       // },
//     ],
//   },
// };

const filterNotRegion = (dataKeys: string[]) => dataKeys.filter((key) => key !== '구분');
const sortObjectByKeys = (obj: IRegDataObj[] | IPriceDataObj[]) => Object.keys(obj).sort();

const getPriceLabel = (resData: IRegDataObj[] | IPriceDataObj[]): string[] => {
  let result: string[] = [];
  if (resData && resData.length > 0) {
    result = sortObjectByKeys(resData);
  }
  return result;
};

export default async function DashboardPage() {
  const initRegStatusData = async (): Promise<any> => {
    let data;
    try {
      const regResponse = await READ_REG_STATUS_DATA({ perPage: 10, page: 1 });

      if (regResponse.ok) {
        data = await regResponse.json();
        // console.log('status: ', data);
      } else throw Error();
    } catch (error) {
      console.log('Error:', error);
    }

    return data;
  };

  const initPriceStatusData = async (): Promise<any> => {
    let data;
    try {
      const priceResponse = await READ_PRICE_STATUS_DATA({ perPage: 99, page: 1 });
      if (priceResponse.ok) {
        data = await priceResponse.json();
        // console.log('price: ', data);
      } else throw Error();
    } catch (error) {
      console.log('Error:', error);
    }

    return data;
  };

  const apiResponse: {
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
  } = {
    reg: await initRegStatusData(),
    // reg:
    price: await initPriceStatusData(),
  };
  const isVaildData: boolean = apiResponse.reg?.data && apiResponse.reg.data.length > 0;

  // ==================================== 국내 수소차 등록 현황 차트 데이터 관리
  // 지역 Labels
  const regLabels = apiResponse.reg.data && apiResponse.reg.data.map((obj: IRegDataObj) => obj.지역);
  // '승용' | '승합' | '화물' 에 대한 legend 배열 만들어야함.
  const sampleData: IRegDataObj | false = isVaildData && apiResponse.reg.data[0];
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

  apiResponse?.reg?.data.forEach((obj: IRegDataObj) => {
    regLegends.forEach((legend: TChartDataKey) => {
      regChartData[legend].push(obj[legend]);
    });
  });

  regDatasets.forEach((dataSet) => {
    const target = dataSet.label;

    dataSet.data = regChartData[target];
  });

  // ==================

  // ==================================== 국내 지역별 수소 판매 가격 데이터 관리

  const chartData = {
    reg: {
      labels: regLabels,
      datasets: regDatasets,
    },
    price: {
      labels: getPriceLabel(apiResponse.price?.data),
      datasets: [
        {
          label: '수소 판매 가격 (원)',
          // data: 2,
          data: labels.price.map(() => faker.number.int({ min: 6000, max: 12000 })),
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
      ],
    },
  };
  return <Dashboard chartData={chartData} apiResponse={apiResponse} />;
}
