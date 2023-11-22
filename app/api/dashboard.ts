import { BASE_URL } from '@app/static/api';

const apiKey = 'KOmVWhRTLJbltSjetYWBfguGDSkRw3U2mROGLgYPMO896f1xSChfUfTIo%2BLAI1uW1uRA8AiGUZE%2Fo4Os3uXBbw%3D%3D';

export const READ_REG_STATUS_DATA = async () => {
  const res = await fetch(
    `${BASE_URL}/15117132/v1/uddi:29120ccb-cd91-4436-b5b7-ecdac6d5dc35?page=1&perPage=10&serviceKey=${apiKey}&_type=json`,
    {
      method: 'GET',
      // mode: 'cors',
      // next: { revalidate: 10 },
    },
  );
  return res;
};

export const READ_PRICE_STATUS_DATA = async () => {
  const res = await fetch(
    `${BASE_URL}/15102821/v1/uddi:01321751-4687-45d3-abd3-d1579597642b?page=1&perPage=100s&serviceKey=${apiKey}&_type=json`,
    {
      method: 'GET',
      // mode: 'cors',
      // next: { revalidate: 10 },
    },
  );
  return res;
};
