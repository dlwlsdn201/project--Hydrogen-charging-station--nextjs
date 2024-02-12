import { useStationsStore } from '@app/store/stations';
import { IStationData } from '@app/types/stations/stations';
import React, { ReactNode } from 'react';

interface IProps {
  handleCenterLocation: ({ lat, lng }: { lat: number; lng: number }) => void;
}

const TableList = ({ handleCenterLocation }: IProps): ReactNode => {
  const { stationsList } = useStationsStore((state) => state.filteredData);

  const handleRowClick = (stationData: IStationData) => {
    handleCenterLocation({ lat: Number(stationData['위도']), lng: Number(stationData['경도']) });
  };

  const commonStyles = 'py-2 tablet-lg:py-4 px-4 tablet-sm:px-[0.3rem] flex items-center border-b border-grey-light';

  return (
    <table className="w-full text-left border-collapse mobile:text-small tablet-lg:text-small">
      <tbody>
        {stationsList.map((item: IStationData, idx: number) => (
          <tr
            key={item['충전소_명']}
            className="hover:bg-sky-700 hover:cursor-pointer grid grid-cols-10"
            onClick={(_) => {
              handleRowClick(item);
            }}
          >
            <td className={`${commonStyles} col-span-1 justify-center text-center`}>{idx + 1}</td>
            <td className={`${commonStyles} col-span-4`}>{item['충전소_명']}</td>
            <td className={`${commonStyles} col-span-5 `}>{item['지번주소']}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableList;
