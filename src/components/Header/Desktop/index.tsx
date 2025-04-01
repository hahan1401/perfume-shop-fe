'use client';

import { Button } from '@/components/ui/Button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/HoverCard';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { DestopHeaderProps } from './types';

const DesktopHeader = ({ brands, perfumeCollections, isAtTopPage }: DestopHeaderProps) => {
  return (
    <div
      className={cn(`items-center justify-between px-10 py-4`, 'hidden md:flex', isAtTopPage ? 'bg-primary/10' : '')}
    >
      <Image
        src={'/logo.png'}
        alt=""
        width={200}
        height={60}
      />

      <div className="flex items-center gap-4">
        <Link
          className={'text-primary'}
          href={'/'}
        >
          Home
        </Link>
        <Link
          className={'text-primary'}
          href={'/'}
        >
          About
        </Link>
        <HoverCard>
          <HoverCardTrigger>
            <Link
              className={'text-primary'}
              href={'/'}
            >
              Collections
            </Link>
          </HoverCardTrigger>
          <HoverCardContent className="flex flex-col gap-2">
            {perfumeCollections.map((item) => (
              <Link
                href={`/products?collection=${encodeURIComponent(item.name)}`}
                key={item._id}
              >
                {item.name}
              </Link>
            ))}
          </HoverCardContent>
        </HoverCard>
        <HoverCard>
          <HoverCardTrigger>
            <Link
              className={'text-primary'}
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
              >
                {brand.name}
              </Link>
            ))}
          </HoverCardContent>
        </HoverCard>
        <Link
          className={'text-primary'}
          href={'/'}
        >
          News
        </Link>
        <Link
          className={'text-primary'}
          href={'/'}
        >
          Contact
        </Link>
      </div>
      <Button
        variant={isAtTopPage ? 'secondary' : 'default'}
        onClick={() => console.log('13123')}
      >
        Contact consulting
      </Button>
    </div>
  );
};

export default DesktopHeader;
