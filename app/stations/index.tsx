'use client';

import React from 'react';
import KakaoMap from './KakaoMap';
import Search from './Search';
import TableList from './TableList';

interface IProps {
  apiResponse: any;
}

const Stations = (props: IProps) => {
  return (
    <div key="1" className="flex flex-col h-full w-full">
      {/* <header className="flex items-center justify-between p-4 bg-white border-b-2">
        <div className="flex items-center gap-4">
          <MapIcon className="w-6 h-6" />
          <h1 className="text-lg font-semibold">Locations Map</h1>
        </div>
      </header> */}
      <main className="flex-grow p-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 relative h-full">
            <KakaoMap />
          </div>
          <aside className="col-span-1 overflow-auto">
            <Search />
            <TableList />
          </aside>
        </div>
      </main>
    </div>
  );
};

// function MapIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
//       <line x1="9" x2="9" y1="3" y2="18" />
//       <line x1="15" x2="15" y1="6" y2="21" />
//     </svg>
//   );
// }

export default Stations;
