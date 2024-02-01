import React, { useEffect } from 'react';
import { Listbox, ListboxItem, ScrollShadow, Selection } from '@nextui-org/react';
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
  const dateItems: string[] = data.map((item: IPriceDataObj) => item['구분']);
  const sortedDateItems: string[] = sortDescendingDate(dateItems);

  useEffect(() => {
    if (!datePicker && sortedDateItems) {
      const mostRecentDate = sortedDateItems[0];
      changePriceDatePicker(new Set([mostRecentDate]));
    }
  }, [changePriceDatePicker, dateItems, datePicker, sortedDateItems]);

  return (
    <div className="flex-[0.1] h-[90%] self-end">
      <ScrollShadow hideScrollBar size={100} offset={0} className="h-[100%]">
        <Listbox
          aria-label="Single selection example"
          className="h-[22rem] overflow-y-scroll"
          variant="flat"
          disallowEmptySelection
          // defaultSelectedKeys={}
          selectionMode="single"
          selectedKeys={datePicker}
          onSelectionChange={(keys: Selection) => {
            console.log({ keys });
            changePriceDatePicker(keys);
          }}
        >
          {sortedDateItems.map((date: string) => (
            <ListboxItem key={date}>{date}</ListboxItem>
          ))}
        </Listbox>
      </ScrollShadow>
    </div>
  );
};

export default Filter;
