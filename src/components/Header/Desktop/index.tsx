'use client';

import { Button } from '@/components/ui/Button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/HoverCard';
import Link from '@/components/ui/Link';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { DestopHeaderProps } from './types';

const DesktopHeader = ({ brands, perfumeCollentions }: DestopHeaderProps) => {
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
    <div
      className={cn(
        `fixed top-0 z-10 w-full items-center justify-between px-10 py-4`,
        isShowHeader ? '' : 'hidden',
        isAtTopPage ? 'bg-transparent' : 'bg-white',
        'hidden md:flex',
      )}
    >
      <Image
        src={'/logo.png'}
        alt=""
        width={200}
        height={60}
      />

      <div className="flex items-center gap-4">
        <Link
          showUnderScore={true}
          href={'/'}
        >
          Home
        </Link>
        <Link
          showUnderScore={true}
          href={'/'}
        >
          About
        </Link>
        <HoverCard>
          <HoverCardTrigger>
            <Link
              showUnderScore={true}
              href={'/'}
            >
              Collections
            </Link>
          </HoverCardTrigger>
          <HoverCardContent className="flex flex-col gap-2">
            {perfumeCollentions.map((item) => (
              <Link
                href={`/products?collection=${encodeURIComponent(item.name)}`}
                key={item._id}
                showUnderScore={true}
              >
                {item.name}
              </Link>
            ))}
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger>
            <Link
              showUnderScore={true}
              href={'/'}
            >
              Brands
            </Link>
          </HoverCardTrigger>
          <HoverCardContent className="flex flex-col gap-2">
            {brands.map((brand) => (
              <Link
                href={`/products?brand=${encodeURIComponent(brand.name)}`}
                key={brand._id}
                showUnderScore={true}
              >
                {brand.name}
              </Link>
            ))}
          </HoverCardContent>
        </HoverCard>
        <Link
          showUnderScore={true}
          href={'/'}
        >
          News
        </Link>
        <Link
          showUnderScore={true}
          href={'/'}
        >
          Contact
        </Link>
      </div>
      <Button onClick={() => console.log('13123')}>Contact consulting</Button>
    </div>
  );
};

export default DesktopHeader;
