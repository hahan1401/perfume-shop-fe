'use client';

import Accordion from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/Drawer';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { MobileHeaderProps } from './types';

const MobileHeader = ({ brands, perfumeCollections, isAtTopPage }: MobileHeaderProps) => {
  return (
    <div className={cn('flex items-center justify-between px-4 py-2 md:hidden')}>
      <Drawer direction="left">
        <DrawerTrigger>
          <Menu className="h-[30px] w-[30px] cursor-pointer" />
        </DrawerTrigger>
        <DrawerContent className="!w-56">
          <DrawerTitle></DrawerTitle>
          <DrawerHeader>
            <DrawerClose>
              <X className="float-right" />
            </DrawerClose>
          </DrawerHeader>
          <div className="flex flex-col gap-2 px-2">
            <Link href={'/'}>Home</Link>
            <Link href={'/'}>About</Link>
            <Accordion
              renderTriggerItem={() => <Link href={'/'}>Collections</Link>}
              items={perfumeCollections}
              renderItem={(item) => (
                <Link
                  key={item._id}
                  href={'/'}
                >
                  {item.name}
                </Link>
              )}
            />
            <Accordion
              renderTriggerItem={() => <Link href={'/'}>Brands</Link>}
              items={brands}
              renderItem={(item) => (
                <Link
                  key={item._id}
                  href={'/'}
                >
                  {item.name}
                </Link>
              )}
            />
            <Link href={'/'}>News</Link>
            <Link href={'/'}>Contact</Link>
          </div>
        </DrawerContent>
      </Drawer>
      <Image
        src={'/logo.png'}
        alt=""
        width={100}
        height={30}
      />
      <Button
        variant={isAtTopPage ? 'secondary' : 'default'}
        onClick={() => console.log('13123')}
      >
        Contact consulting
      </Button>
    </div>
  );
};

export default MobileHeader;
