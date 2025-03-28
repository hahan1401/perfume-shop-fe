import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

const SectionTitle = ({ className, ...props }: HTMLAttributes<HTMLHeadElement>) => {
  return (
    <h3
      className={(cn(className), 'mb-2 text-center text-3xl font-bold md:mb-4')}
      {...props}
    />
  );
};

export default SectionTitle;
