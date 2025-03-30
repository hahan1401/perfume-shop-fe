import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

const Devider = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn('bg-primary my-2 h-[1px]', className)}
      {...props}
    />
  );
};

export default Devider;
