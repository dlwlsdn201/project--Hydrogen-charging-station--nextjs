import React from 'react';

const Header = () => {
  const commonStyles =
    'py-2 tablet-lg:py-4 px-4 tablet-sm:px-[0.3rem] bg-grey-lightest font-bold uppercase text-grey-dark border-b border-grey-light';
  return (
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="grid grid-cols-10 text-sm tablet-lg:text-lg">
          <th className={`${commonStyles} col-span-1`}>No</th>
          <th className={`${commonStyles} col-span-4`}>충전소명</th>
          <th className={`${commonStyles} col-span-5`}>지번 주소</th>
        </tr>
      </thead>
    </table>
  );
};

export default Header;
