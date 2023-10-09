'use client';
import { faker } from '@faker-js/faker';

import Image from 'next/image';

import { NextUIProvider } from '@nextui-org/react';
import Dashboard from './dashboard/main';

const labels = {
  price: ['23년1월', '23년2월', '23년3월', '23년4월', '23년5월', '23년6월', '23년7월', '23년8월'],
  reg: ['전국', '서울', '경기', '경남', '전남', '전북', '경북', '제주'],
};

export const data = {
  price: {
    labels: labels.price,
    datasets: [
      {
        label: 'Dataset 1',
        // data: 2,
        data: labels.price.map(() => faker.number.int({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        // data: 2,
        data: labels.price.map(() => faker.number.int({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  },
  reg: {
    labels: labels.reg,
    datasets: [
      {
        label: 'Dataset 1',
        // data: 2,
        data: labels.reg.map(() => faker.number.int({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        // data: 2,
        data: labels.reg.map(() => faker.number.int({ min: 0, max: 1000 })),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  },
};

export default function DashboardPage() {
  return (
    <NextUIProvider style={{ width: '100%' }}>
      <Dashboard chartData={data} />
    </NextUIProvider>
  );
}
