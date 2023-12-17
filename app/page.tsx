import { faker } from '@faker-js/faker';
import Dashboard from './dashboard/main';
import { READ_PRICE_STATUS_DATA, READ_REG_STATUS_DATA } from './api/dashboard';
import { IPriceDataObj, IRegDataObj, TRegChartDataKey } from '@app/types/dashboard/chart';

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

export default async function DashboardPage() {
  const initRegStatusData = async (): Promise<any> => {
    let data;
    try {
      const regResponse = await READ_REG_STATUS_DATA({ perPage: 10, page: 1 });

      if (regResponse.ok) {
        data = await regResponse.json();
        console.log('status: ', data);
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

  return <Dashboard apiResponse={apiResponse} />;
}
