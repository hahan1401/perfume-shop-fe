import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface DeviderProps extends HTMLAttributes<HTMLDivElement> {
  direcion?: 'horizontal' | 'vertical';
}

const Devider = ({ className, direcion = 'horizontal', ...props }: DeviderProps) => {
  if (direcion === 'vertical') {
    return (
      <div
        className={cn('bg-primary/10 h-full w-[1px]', className)}
        {...props}
      />
    );
  }

  return (
    <div
      className={cn('bg-primary/10 my-2 h-[1px]', className)}
      {...props}
    />
  );
};

export default Devider;
