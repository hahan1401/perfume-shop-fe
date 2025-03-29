import { cn } from '@/lib/utils';
import NextImage from 'next/image';
import { ComponentProps } from 'react';

interface IImageProps extends ComponentProps<typeof NextImage> {
  ratio?: '1:1' | '9:16' | '16:9';
}

const ratioMapping: Record<NonNullable<IImageProps['ratio']>, string> = {
  '1:1': 'pt-[100%]',
  '9:16': 'pt-[56.25%]',
  '16:9': 'pt-[177.77778%]',
};

const Image = ({ ratio = '1:1', style, className, children, ...props }: IImageProps) => {
  return (
    <div className={cn('relative', className, ratioMapping[ratio])}>
      <NextImage
        {...props}
        style={{ objectFit: 'cover', ...style }}
        fill={true}
      />
      {children}
    </div>
  );
};

export default Image;
