import { cn } from '@/lib/utils';
import NextLink from 'next/link';
import { ComponentProps } from 'react';
import styles from './styles.module.css';

interface NextLinkprops extends ComponentProps<typeof NextLink> {
  showUnderScore?: boolean;
}

const Link = ({ className, children, showUnderScore = false, ...props }: NextLinkprops) => {
  return (
    <NextLink
      className={cn(styles.nextLinkWrapper, className)}
      data-show-under-score={showUnderScore}
      {...props}
    >
      {children}
    </NextLink>
  );
};

export default Link;
