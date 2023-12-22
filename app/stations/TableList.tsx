import { faker } from '@faker-js/faker';
import React from 'react';

const TableList = () => {
  const listItems = [
    {
      name: '충전소1',
      location: faker.location.streetAddress(),
    },
    {
      name: '충전소2',
      location: faker.location.streetAddress(),
    },
    {
      name: '충전소3',
      location: faker.location.streetAddress(),
    },
    {
      name: '충전소4',
      location: faker.location.streetAddress(),
    },
    {
      name: '충전소5',
      location: faker.location.streetAddress(),
    },
    {
      name: '충전소6',
      location: faker.location.streetAddress(),
    },
  ];

  return (
    <table className="w-full text-left border-collapse">
      <thead>
        <tr>
          <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
            충전소명
          </th>
          <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
            주소
          </th>
        </tr>
      </thead>
      <tbody>
        {listItems.map((item, index) => (
          <tr key={item.name} className="hover:bg-grey-lighter">
            <td className="py-4 px-6 border-b border-grey-light">{item.name}</td>
            <td className="py-4 px-6 border-b border-grey-light">{item.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableList;
