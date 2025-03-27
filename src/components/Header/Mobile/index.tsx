'use client';

import Accordion from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { Drawer, DrawerClose, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/Drawer';
import Link from '@/components/ui/Link';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { MobileHeaderProps } from './types';

const MobileHeader = ({ brands, perfumeCollentions }: MobileHeaderProps) => {
  return (
    <header className={cn('flex items-center justify-between px-4 py-2 md:hidden')}>
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
            <Accordion
              renderTriggerItem={() => (
                <Link
                  showUnderScore={true}
                  href={'/'}
                >
                  Collections
                </Link>
              )}
              items={perfumeCollentions}
              renderItem={(item) => (
                <Link
                  key={item._id}
                  showUnderScore={true}
                  href={'/'}
                >
                  {item.name}
                </Link>
              )}
            />
            <Accordion
              renderTriggerItem={() => (
                <Link
                  showUnderScore={true}
                  href={'/'}
                >
                  Brands
                </Link>
              )}
              items={brands}
              renderItem={(item) => (
                <Link
                  key={item._id}
                  showUnderScore={true}
                  href={'/'}
                >
                  {item.name}
                </Link>
              )}
            />
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
        </DrawerContent>
      </Drawer>
      <Image
        src={'/logo.png'}
        alt=""
        width={100}
        height={30}
      />
      <Button onClick={() => console.log('13123')}>Contact consulting</Button>
    </header>
  );
};

export default MobileHeader;
