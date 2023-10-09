import { InnerContaier } from '@app/components/Modules/StyleComponents';
import React, { ReactElement, ReactNode } from 'react';

const DashboardLayout = ({ children }: { children: ReactNode }): ReactElement => {
  return <InnerContaier>{children}</InnerContaier>;
};

export default DashboardLayout;
