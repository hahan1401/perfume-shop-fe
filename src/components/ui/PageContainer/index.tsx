import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';
import Container from '../Container';

const PageContainer = ({ children, className }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn('mt-[52px] md:mt-[89px]')}>
      <Container className={className}>{children}</Container>
    </div>
  );
};

export default PageContainer;
