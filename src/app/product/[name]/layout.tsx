import PageContainer from '@/components/ui/PageContainer';
import { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => {
  return <PageContainer>{children}</PageContainer>;
};

export default layout;
