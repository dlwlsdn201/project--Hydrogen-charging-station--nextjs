import { useStationsStore } from '@app/store/stations';
import { IStationData } from '@app/types/stations/stations';
import { faker } from '@faker-js/faker';
import React from 'react';

const TableList = () => {
  const { stationsList } = useStationsStore((state) => state.data);
  const listItems = stationsList.map((station: IStationData) => ({
    name: station['충전소_명'],
    location: station['지번주소'],
  }));

  return (
    <table className="w-full text-left border-collapse">
      <thead>
        <tr>
          <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
            No
          </th>
          <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
            충전소명
          </th>
          <th className="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
            지번 주소
          </th>
        </tr>
      </thead>
      <tbody>
        {listItems.map((item: { name: string; location: string }, idx: number) => (
          <tr key={item.name} className="hover:bg-grey-lighter">
            <td className="py-4 px-6 border-b border-grey-light">{idx + 1}</td>
            <td className="py-4 px-6 border-b border-grey-light">{item.name}</td>
            <td className="py-4 px-6 border-b border-grey-light">{item.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableList;
