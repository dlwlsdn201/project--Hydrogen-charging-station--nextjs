import React, { useMemo, useState } from 'react';
import { Listbox, ListboxItem } from '@nextui-org/react';

const Filter = () => {
  const [selectedKeys, setSelectedKeys] = useState(['text']);

  const selectedValue = useMemo(() => Array.from(selectedKeys).join(', '), [selectedKeys]);

  return (
    <div className="flex flex-col gap-2">
      <Listbox
        aria-label="Single selection example"
        className="max-h-[50%] overflow-scroll"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={(keys: 'all' | any) => setSelectedKeys(keys)}
      >
        <ListboxItem key="text">Text</ListboxItem>
        <ListboxItem key="number">Number</ListboxItem>
        <ListboxItem key="date">Date</ListboxItem>
        <ListboxItem key="single_date">Single Date</ListboxItem>
        <ListboxItem key="iteration">Iteration</ListboxItem>
        <ListboxItem key="text">Text</ListboxItem>
        <ListboxItem key="number">Number</ListboxItem>
        <ListboxItem key="date">Date</ListboxItem>
        <ListboxItem key="single_date">Single Date</ListboxItem>
        <ListboxItem key="iteration">Iteration</ListboxItem>
      </Listbox>
    </div>
  );
};

export default Filter;
