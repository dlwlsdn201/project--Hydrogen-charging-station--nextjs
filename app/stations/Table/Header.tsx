import React from 'react';

const Header = () => {
  return (
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="grid grid-cols-10">
          <th className="py-4 px-4 col-span-1 bg-grey-lightest font-bold uppercase text-lg text-grey-dark border-b border-grey-light">
            No
          </th>
          <th className="py-4 px-4  col-span-4 bg-grey-lightest font-bold uppercase text-lg text-grey-dark border-b border-grey-light">
            충전소명
          </th>
          <th className="py-4 px-4  col-span-5 bg-grey-lightest font-bold uppercase text-lg text-grey-dark border-b border-grey-light">
            지번 주소
          </th>
        </tr>
      </thead>
    </table>
  );
};

export default Header;
