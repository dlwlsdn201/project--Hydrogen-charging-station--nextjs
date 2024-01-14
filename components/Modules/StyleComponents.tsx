'use client';

import styled from 'styled-components';

export const RootContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column nowrap;
  height: 100%;
  padding: 2rem 4rem;
`;

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-flow: column nowrap;
  gap: 4rem;
  height: 100%;
  width: 100%;
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const FlexCenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
