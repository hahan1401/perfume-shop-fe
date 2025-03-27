'use client';

import { cn } from '@/lib/utils';
import { IBrand } from '@/types/brand';
import { IPerffumeCollection } from '@/types/perfumeCollections';
import { useEffect, useRef, useState } from 'react';
import DesktopHeader from './Desktop';
import MobileHeader from './Mobile';

const HeaderWrapper = ({
  brands,
  perfumeCollections,
}: {
  brands: IBrand[];
  perfumeCollections: IPerffumeCollection[];
}) => {
  const [isShowHeader, setIsShowHeader] = useState(true);
  const [isAtTopPage, setIsAtTopPage] = useState(true);
  const lastSrollYPosition = useRef(0);

  useEffect(() => {
    if (typeof window !== undefined) {
      lastSrollYPosition.current = window.scrollY;
      setIsAtTopPage(window.scrollY === 0);
      const handleScroll = () => {
        setIsAtTopPage(window.scrollY === 0);
        if (window.scrollY > lastSrollYPosition.current) {
          setIsShowHeader(false);
        } else {
          setIsShowHeader(true);
        }
        lastSrollYPosition.current = window.scrollY;
      };
      window.addEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className={cn(isShowHeader ? '' : 'hidden', isAtTopPage ? 'bg-transparent' : 'bg-white')}>
      <DesktopHeader
        brands={brands}
        perfumeCollections={perfumeCollections}
      />
      <MobileHeader
        brands={brands}
        perfumeCollections={perfumeCollections}
      />
    </div>
  );
};

export default HeaderWrapper;
