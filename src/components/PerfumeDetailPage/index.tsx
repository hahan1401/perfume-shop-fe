'use client';

import { toVietNamCurrency } from '@/lib/utils';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../ui/Button';
import Devider from '../ui/Devider';
import { Message } from '../ui/icons/components/Message';
import { Phone } from '../ui/icons/components/Phone';
import { Zalo } from '../ui/icons/components/Zalo';
import Image from '../ui/Image';
import QuantityCounter from '../ui/QuantityCounter';
import PerfumeCategoryItem from './PerfumeCategoryItem';
import { PerfumeDetailPageProps } from './types';

const PerfumeDetailPage = ({ data }: PerfumeDetailPageProps) => {
  const [currentPrice, setCurrentprice] = useState(data.prices[0]);

  return (
    <div className="flex gap-4">
      <div className="flex-[3]">
        <Image
          src={data.imageUrl}
          alt={data.name}
          ratio="1:1"
        />
      </div>

      <div className="flex flex-[5] flex-col gap-4">
        <h2 className="text-5xl font-semibold">{data.name}</h2>
        <div className="flex gap-4">
          <p className="text-lg text-gray-700">
            Collection: <span className="text-primary font-semibold">{data.collection}</span>
          </p>
          -
          <p className="text-lg text-gray-700">
            Brand: <span className="text-primary font-semibold">{data.brand}</span>
          </p>
        </div>

        <Devider className="bg-primary/10" />

        <p className="text-lg font-semibold">{toVietNamCurrency(currentPrice.price)}</p>
        <div className="flex gap-2">
          {data.prices.map((price) => (
            <Button
              variant={currentPrice.price === price.price ? 'default' : 'outline'}
              key={price.volume}
              onClick={() => {
                setCurrentprice(price);
              }}
            >
              {price.volume}
            </Button>
          ))}
        </div>
        <QuantityCounter value={1} />
        <Button className="h-12 w-40 rounded-4xl">Buy now!</Button>

        <Devider className="bg-primary/10" />

        <div className="flex gap-6">
          <Link
            href={''}
            target="_blank"
            className="flex items-center gap-3"
          >
            <Zalo className="text-2xl" />
            <span className="underscore">Zalo</span>
          </Link>
          <Devider direcion="vertical" />
          <Link
            href={''}
            target="_blank"
            className="flex items-center gap-3"
          >
            <Message className="text-2xl" />
            <span className="underscore">Fanpage</span>
          </Link>
          <Devider direcion="vertical" />
          <Link
            href={'tel:0372928756'}
            target="_blank"
            className="flex items-center gap-3"
          >
            <Phone className="text-2xl" />
            <span className="underscore">0372928756</span>
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-4 rounded-xs bg-white p-4">
          <PerfumeCategoryItem
            label={'Brand'}
            value={data.brand}
          />
          <PerfumeCategoryItem
            label={'Brand'}
            value={data.brand}
          />
          <PerfumeCategoryItem
            label={'Brand'}
            value={data.brand}
          />
          <PerfumeCategoryItem
            label={'Brand'}
            value={data.brand}
          />
          <PerfumeCategoryItem
            label={'Brand'}
            value={data.brand}
          />
        </div>
      </div>
    </div>
  );
};

export default PerfumeDetailPage;
