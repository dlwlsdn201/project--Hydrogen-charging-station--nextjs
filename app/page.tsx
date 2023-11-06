import { faker } from '@faker-js/faker';
import { IDatasetKeys } from '@app/types/dashboard/chart';
import { BASE_URL } from '@app/static/api';
import Dashboard from './dashboard/main';

const labels = {
  price: ['23년1월', '23년2월', '23년3월', '23년4월', '23년5월', '23년6월', '23년7월', '23년8월'],
  reg: ['전국', '서울', '경기', '경남', '전남', '전북', '경북', '제주'],
};

// ====== SAMPLE ======
const dataset: { [key: string]: Array<{ label: string; data: number[]; backgroundColor: string }> } = {
  reg: [],
  price: [],
};

let totalData = {
  reg: [],
  price: [],
};

const regStatusKeys: string[] = ['승용', '승합', '화물'];

regStatusKeys.forEach((key) => {
  let dataSetObj: IDatasetKeys = {
    label: '',
    data: [],
    backgroundColor: '#fff',
    stack: 'Stack 0',
  };

  dataSetObj['label'] = key;
  dataSetObj['data'] = labels.reg.map(() => faker.number.int({ min: 0, max: 1000 }));
  dataSetObj['backgroundColor'] = faker.color.rgb({ casing: 'mixed', format: 'hex' });

  if (key !== '지역' && key !== '총합계') {
    // dataset 정의
    dataSetObj['stack'] = 'Stack 0';
  }
  // else if (key === '총합계') {
  //   dataSetObj['stack'] = 'Stack 1';
  // }

  dataset.reg.push(dataSetObj);
});

export const data = {
  reg: {
    labels: labels.reg,
    datasets: dataset.reg,
  },
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

const getRegStatusData = async () => {
  const regResponse = await fetch(`${BASE_URL}/15117132/v1/uddi:29120ccb-cd91-4436-b5b7-ecdac6d5dc35`);

  // console.log({ regResponse });
  return regResponse;
};

export default async function DashboardPage() {
  return <Dashboard chartData={data} />;
}
