'use client';

import Container from '@/components/ui/Container';
import Image from '@/components/ui/Image';
import SectionTitle from '@/components/ui/SectionTitle';
import Link from 'next/link';
import { useRef } from 'react';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import styles from './styles.module.css';
import { ICollectionsSectionProps } from './types';

const CollectionsSection = ({ perfumeCollections }: ICollectionsSectionProps) => {
  const swiperRef = useRef<SwiperRef | null>(null);

  const goToSlide = (index: number) => {
    swiperRef.current?.swiper.slideTo(index);
  };

  return (
    <Container className={`${styles.collectionsSectionWrapper} sm:px-32 lg:px-40`}>
      <SectionTitle>Our collections</SectionTitle>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        ref={swiperRef}
        initialSlide={1}
      >
        {perfumeCollections.map((item, index) => (
          <SwiperSlide
            key={item._id}
            onClick={() => {
              goToSlide(index);
            }}
          >
            <div className="card-wrapper overflow-hidden rounded-sm">
              <Link
                href={`/products?collections=${item.name}`}
                className="text-primary-foreground absolute top-7 left-1/2 z-10 -translate-x-1/2 text-2xl font-semibold"
              >
                {item.name}
              </Link>
              <Image
                alt={item.name}
                src={'/home/hero-section/IMG_2144.jpg'}
                ratio="16:9"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default CollectionsSection;
