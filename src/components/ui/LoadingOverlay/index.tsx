import { cn } from '@/lib/utils';
import { HTMLAttributes, useEffect, useState } from 'react';

interface LoadingOverlayProps extends HTMLAttributes<SVGElement> {
  show?: boolean;
}

const LoadingOverlay = ({ className, show = false, ...props }: LoadingOverlayProps) => {
  const [isShow, setIsShow] = useState(show);

  useEffect(() => {
    setIsShow(true);
    const timer = setTimeout(() => {
      setIsShow(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [show]);

  return (
    <div
      className={cn('bg-secondary/70 absolute inset-0 flex items-center justify-center', isShow ? 'flex' : 'hidden')}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn('lucide lucide-loader-circle-icon lucide-loader-circle animate-spin', className)}
        {...props}
      >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </svg>
    </div>
  );
};

export default LoadingOverlay;
