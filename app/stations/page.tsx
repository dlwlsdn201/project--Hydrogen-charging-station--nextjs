import React from 'react';
import Stations from '.';
import { READ__STATIONS_DATA } from '@api/stations';

const StationsPage = async () => {
  const initStationsData = async (): Promise<any> => {
    let data;
    try {
      const priceResponse: Response = await READ__STATIONS_DATA({ perPage: 99, page: 1 });
      if (priceResponse.ok) {
        data = await priceResponse.json();
      } else throw Error();
    } catch (error) {
      console.log('Error:', error);
    }

    return data;
  };

  const apiResponse = await initStationsData();
  return (
    <>
      <Stations apiResponse={apiResponse} />
    </>
  );
};

export default StationsPage;
