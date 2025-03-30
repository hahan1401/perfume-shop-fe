import { cn } from '@/lib/utils';
import { IContainerProps } from './types';

const spacingTopMapping: Record<NonNullable<IContainerProps['spacingTop']>, string> = {
  small: '',
  normal: 'pt-[3rem] md:pt-[6rem]',
  large: '',
};

const Container = ({ spacingTop = 'normal', className, fullScreen = false, ...props }: IContainerProps) => {
  return (
    <div
      className={cn(fullScreen ? '' : 'container mx-auto px-2', spacingTopMapping[spacingTop], className)}
      {...props}
    />
  );
};

export default Container;
