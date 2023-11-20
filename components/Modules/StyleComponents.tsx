'use client';

import styled from 'styled-components';

export const RootContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  height: 100%;
  padding: 1rem 6rem;
`;

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-flow: column wrap;
  gap: 4rem;
  /* height: 100%; */
  width: 100%;
`;
