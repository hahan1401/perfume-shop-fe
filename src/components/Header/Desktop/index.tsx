'use client';

import { Button } from '@/components/ui/Button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/HoverCard';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { DestopHeaderProps } from './types';

const DesktopHeader = ({ brands, perfumeCollections }: DestopHeaderProps) => {
  return (
    <div className={cn(`fixed top-0 z-10 w-full items-center justify-between px-10 py-4`, 'hidden md:flex')}>
      <Image
        src={'/logo.png'}
        alt=""
        width={200}
        height={60}
      />

      <div className="flex items-center gap-4">
        <Link href={'/'}>Home</Link>
        <Link href={'/'}>About</Link>
        <HoverCard>
          <HoverCardTrigger>
            <Link href={'/'}>Collections</Link>
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
            <Link href={'/'}>Brands</Link>
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
        <Link href={'/'}>News</Link>
        <Link href={'/'}>Contact</Link>
      </div>
      <Button onClick={() => console.log('13123')}>Contact consulting</Button>
    </div>
  );
};

export default DesktopHeader;
