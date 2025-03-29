'use client';

import Container from '@/components/ui/Container';
import Image from '@/components/ui/Image';
import { IBrand } from '@/types/brand';
import 'swiper/css';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import styles from './styles.module.css';

interface BrandSectionProps {
  brands: IBrand[];
}

const BrandSection = ({ brands }: BrandSectionProps) => {
  const pagination: SwiperOptions['pagination'] = {
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 5,
    renderBullet: function (index: number, className: string) {
      return `<div class="${className}">
                    <img src="${brands[index].thumbnailUrl}" />
                    <p class="bullet-name">${brands[index].name}</p>
                  </div>`;
    },
  };

  return (
    <Container
      className={styles.brandSectionWrapper}
      fullScreen={true}
    >
      <Swiper
        modules={[Pagination]}
        pagination={pagination}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          0: {
            pagination: { ...pagination, dynamicMainBullets: 1 },
          },
          640: {
            pagination: { ...pagination, dynamicMainBullets: 3 },
          },
          768: {
            pagination: { ...pagination, dynamicMainBullets: 5 },
          },
        }}
      >
        {brands.map((item) => (
          <SwiperSlide key={`${item._id}-${Math.random()}`}>
            <Image
              alt={item.name}
              src={item.thumbnailUrl}
              ratio="9:16"
            />

            {/* <Button
              variant={'outline'}
              className="w-fit rounded-2xl"
            >
              <Link
                href={'/'}
                className="flex items-center gap-2"
              >
                Buy Now! <ArrowRight />
              </Link>
            </Button> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default BrandSection;
