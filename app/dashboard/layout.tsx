import { InnerContainer } from '@app/components/Modules/StyleComponents';
import React, { ReactElement, ReactNode } from 'react';

const DashboardLayout = ({ children }: { children: ReactNode }): ReactElement => {
  return <InnerContainer>{children}</InnerContainer>;
};

export default DashboardLayout;
