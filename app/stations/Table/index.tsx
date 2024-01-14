import { useStationsStore } from '@app/store/stations';
import { IStationData } from '@app/types/stations/stations';
import React, { ReactNode } from 'react';

interface IProps {
  handleCenterLocation: ({ lat, lng }: { lat: number; lng: number }) => void;
}

const TableList = ({ handleCenterLocation }: IProps): ReactNode => {
  const { stationsList } = useStationsStore((state) => state.filteredData);
  const listItems = stationsList.map((station: IStationData) => ({
    ...station,
    name: station['충전소_명'],
    location: station['지번주소'],
  }));

  return (
    <table className="w-full text-left border-collapse">
      <tbody>
        {listItems.map((item: IStationData & { name: string; location: string }, idx: number) => (
          <tr
            key={item.name}
            className="hover:bg-sky-700 hover:cursor-pointer grid grid-cols-10"
            onClick={(_) => handleCenterLocation({ lat: Number(item['위도']), lng: Number(item['경도']) })}
          >
            <td className="py-4 px-4 border-b col-span-1 border-grey-light text-center">{idx + 1}</td>
            <td className="py-4 px-4 border-b col-span-4 border-grey-light">{item.name}</td>
            <td className="py-4 px-4 border-b col-span-5 border-grey-light ">{item.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableList;
