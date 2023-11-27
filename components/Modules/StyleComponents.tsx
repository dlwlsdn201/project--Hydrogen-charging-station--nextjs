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
