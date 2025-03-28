'use client';

import { Button } from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import Image from '@/components/ui/Image';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import styles from './styles.module.css';
import { ITopRecommendedSectionProps } from './types';

const TopRecommendedSection = ({ perfumes }: ITopRecommendedSectionProps) => {
  const pagination: SwiperOptions['pagination'] = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<div class="${className}">
                <div class="flex flex-col h-full">
                  <img class="flex-1" src="${perfumes[index].imageUrl}" />
                  <p>name</p>
                </div>
              </div>`;
    },
  };

  return (
    <Container className={styles.topRecommendedSectionWrapper}>
      <Swiper
        modules={[Pagination]}
        pagination={pagination}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
      >
        {perfumes.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="flex-1">
                <div className="mx-auto">
                  <Image
                    alt={item.name}
                    src={item.imageUrl}
                    ratio="1:1"
                  />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-4">
                <h3 className="text-2xl font-semibold">{item.name}</h3>
                <p className="text-sm">{item.description}</p>
                <Button
                  variant={'outline'}
                  className="w-fit rounded-2xl"
                >
                  <Link
                    href={'/'}
                    className="flex items-center gap-2"
                  >
                    Buy Now! <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* {perfumes.map((item, index) => (
        <div
          key={item._id}
          className={cn(activeIndex === index ? 'flex' : 'hidden')}
        >
          <div className="flex-1">
            <div className="mx-auto w-[80%]">
              <Image
                alt={item.name}
                src={'/home/hero-section/IMG_2144.jpg'}
                ratio="1:1"
              />
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <h3 className="text-2xl font-semibold">{item.name}</h3>
            <p className="text-sm">{item.description}</p>
            <Button
              variant={'outline'}
              className="w-fit rounded-2xl"
            >
              <Link
                href={'/'}
                className="flex items-center gap-2"
              >
                Buy Now! <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      ))} */}
    </Container>
  );
};

export default TopRecommendedSection;
