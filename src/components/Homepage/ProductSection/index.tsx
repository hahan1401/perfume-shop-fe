'use client';

import Container from '@/components/ui/Container';
import SectionTitle from '@/components/ui/SectionTitle';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import PerfumeCard from './components/PerfumeCard';
import styles from './styles.module.css';
import { IProductSectionProps } from './types';

const ProductSection = ({ perfumes }: IProductSectionProps) => {
  return (
    <Container className={styles.productSectionWrapper}>
      <SectionTitle>Perfumes</SectionTitle>

      <Swiper
        slidesPerView={5}
        spaceBetween={50}
        initialSlide={1}
        modules={[Pagination]}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 5,
        }}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        {perfumes
          .concat(perfumes)
          .concat(perfumes)
          .concat(perfumes)
          .concat(perfumes)
          .map((item) => (
            <SwiperSlide key={`${item._id}-${Math.random()}`}>
              <PerfumeCard item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </Container>
  );
};

export default ProductSection;
