'use client';
import React from 'react';
import { NextUIProvider } from '@nextui-org/react';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <NextUIProvider style={{ width: '100%', height: '100%' }}>{children}</NextUIProvider>;
};
