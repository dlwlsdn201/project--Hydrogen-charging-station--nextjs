import { BASE_URL } from '@app/static/api';

const apiKey = 'KOmVWhRTLJbltSjetYWBfguGDSkRw3U2mROGLgYPMO896f1xSChfUfTIo%2BLAI1uW1uRA8AiGUZE%2Fo4Os3uXBbw%3D%3D';

const getParamsQueryString = (rawParams: any): string => new URLSearchParams(rawParams).toString();
const getReqURL = (params: string, url: string) => `${BASE_URL}${url}?${params}`;

/** 지역별 수소 자동차 등록 현황 데이터 조회 */
export const READ_REG_STATUS_DATA = async ({ perPage, page }: { perPage: number; page: number }) => {
  const rawParams = {
    serviceKey: apiKey,
    perPage,
    page,
    _type: 'json',
  };

  const ParamsQueryString = getParamsQueryString(rawParams);
  const url = getReqURL(ParamsQueryString, '/15117132/v1/uddi:29120ccb-cd91-4436-b5b7-ecdac6d5dc35');

  const res = await fetch(url, {
    method: 'GET',
  });
  return res;
};

/** 지역별 수소 판매 가격 현황 데이터 조회 */
export const READ_PRICE_STATUS_DATA = async ({ perPage, page }: { perPage: number; page: number }) => {
  const rawParams = {
    serviceKey: apiKey,
    perPage,
    page,
    _type: 'json',
  };

  const ParamsQueryString = getParamsQueryString(rawParams);
  const url = getReqURL(ParamsQueryString, '/15102821/v1/uddi:01321751-4687-45d3-abd3-d1579597642b');

  const res = await fetch(url, {
    method: 'GET',
  });

  return res;
};
