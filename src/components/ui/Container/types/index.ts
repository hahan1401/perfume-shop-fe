import { HTMLAttributes } from 'react';

export interface IContainerProps extends HTMLAttributes<HTMLDivElement> {
  spacingTop?: 'small' | 'normal' | 'large';
  fullScreen?: boolean;
}
