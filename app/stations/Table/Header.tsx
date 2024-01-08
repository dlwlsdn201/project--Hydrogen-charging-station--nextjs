import React from 'react';

const Header = () => {
  return (
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="grid grid-cols-5">
          <th className="py-4 px-4 border-yellow-400 w border-1 col-span-1 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
            No
          </th>
          <th className="py-4 px-4 border-yellow-400 w border-1 col-span-2 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
            충전소명
          </th>
          <th className="py-4 px-4 border-yellow-400 w border-1 col-span-2 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
            지번 주소
          </th>
        </tr>
      </thead>
    </table>
  );
};

export default Header;
