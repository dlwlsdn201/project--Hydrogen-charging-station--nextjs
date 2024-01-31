import Dashboard from './dashboard';
import { READ_PRICE_STATUS_DATA, READ_REG_STATUS_DATA } from './api/dashboard';

export default async function DashboardPage() {
  const initRegStatusData = async (): Promise<any> => {
    let data;
    try {
      const regResponse = await READ_REG_STATUS_DATA({ perPage: 10, page: 1 });

      if (regResponse.ok) {
        data = await regResponse.json();
        console.log('status: ', data);
      } else throw Error();
    } catch (error) {
      console.log('Error:', error);
    }

    return data;
  };

  const initPriceStatusData = async (): Promise<any> => {
    let data;
    try {
      const priceResponse = await READ_PRICE_STATUS_DATA({ perPage: 99, page: 1 });
      if (priceResponse.ok) {
        data = await priceResponse.json();
      } else throw Error();
    } catch (error) {
      console.log('Error:', error);
    }

    return data;
  };

  const apiResponse: {
    reg: {
      currentCount: number;
      data: Array<any>;
      matchCount: number;
      page: number;
      perPage: number;
      totalCount: number;
    };
    price: {
      currentCount: number;
      data: Array<any>;
      matchCount: number;
      page: number;
      perPage: number;
      totalCount: number;
    };
  } = {
    reg: await initRegStatusData(),
    // reg:
    price: await initPriceStatusData(),
  };

  return <Dashboard apiResponse={apiResponse} />;
}
