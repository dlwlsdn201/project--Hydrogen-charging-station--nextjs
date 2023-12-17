import { BASE_URL } from '@app/static/api';

const apiKey = 'KOmVWhRTLJbltSjetYWBfguGDSkRw3U2mROGLgYPMO896f1xSChfUfTIo+LAI1uW1uRA8AiGUZE/o4Os3uXBbw=='; //Decoding

const getParamsQueryString = (rawParams: any): string => new URLSearchParams(rawParams).toString();
const getReqURL = (params: string, url: string) => `${BASE_URL}${url}?${params}`;

/** 국내 수소 충전소 현황 조회 */
export const READ__STATIONS_DATA = async ({ perPage, page }: { perPage: number; page: number }): Promise<Response> => {
  const rawParams = {
    serviceKey: apiKey,
    perPage,
    page,
    _type: 'json',
  };

  const ParamsQueryString = getParamsQueryString(rawParams);
  const url = getReqURL(ParamsQueryString, '/15098704/v1/uddi:92db198c-b2b4-4f22-bf73-d4473356c911');
  const res: Response = await fetch(url, {
    method: 'GET',
  });
  return res;
};
