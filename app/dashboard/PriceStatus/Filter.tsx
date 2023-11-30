import React from 'react';
import { Listbox, ListboxItem } from '@nextui-org/react';
import { useDashboardStore } from '@app/store/dashboard';
import { IPriceDataObj } from '@app/types/dashboard/chart';

const sortDescendingDate = (dateArray: string[]) =>
  dateArray && dateArray.length ? dateArray.sort((a, b) => new Date(b).getTime() - new Date(a).getTime()) : dateArray;

const Filter = () => {
  // const [selectedKeys, setSelectedKeys] = useState(['text']);
  const {
    priceStatus: { data, datePicker },
    changePriceDatePicker,
  } = useDashboardStore((state) => state);
  // const selectedValue = useMemo(() => Array.from(selectedKeys).join(', '), [selectedKeys]);
  const dateItems: string[] = data.map((item: IPriceDataObj) => item['구분']);
  const sortedDateItems: string[] = sortDescendingDate(dateItems);

  return (
    <div className="flex-[0.2]">
      <Listbox
        aria-label="Single selection example"
        className="h-[20rem] overflow-y-scroll"
        variant="flat"
        disallowEmptySelection
        // defaultSelectedKeys={['2023-09']}
        selectionMode="single"
        selectedKeys={datePicker}
        onSelectionChange={changePriceDatePicker}
      >
        {sortedDateItems.map((date: string) => (
          <ListboxItem key={date}>{date}</ListboxItem>
        ))}
      </Listbox>
    </div>
  );
};

export default Filter;
