import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

const SectionTitle = ({ className, ...props }: HTMLAttributes<HTMLHeadElement>) => {
  return (
    <h5
      className={(cn(className), 'mb-2 text-lg font-semibold md:mb-3')}
      {...props}
    />
  );
};

export default SectionTitle;
