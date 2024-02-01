import { useStationsStore } from '@app/store/stations';
import { TSearchType } from '@app/types/stations/filter';
import { Tabs, Tab } from '@nextui-org/react';
import React, { Key, ReactNode } from 'react';

const Filter = (): ReactNode => {
  const { changeSearchType } = useStationsStore((state) => state);

  return (
    <div className="mobile:w-[100%] flex flex-col">
      <Tabs
        classNames={{ tabList: 'mobile:w-[100%] w-[auto]' }}
        className="h-[100%]"
        aria-label="Options"
        size="md"
        radius="sm"
        defaultSelectedKey={'station'}
        onSelectionChange={(params: Key) => {
          changeSearchType(params as TSearchType);
        }}
      >
        <Tab key="station" title="충전소명"></Tab>
        <Tab key="address" title="주소명"></Tab>
      </Tabs>
    </div>
  );
};

export default Filter;
