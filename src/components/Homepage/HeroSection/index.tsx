'use client';

import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './styles.module.css';

const SLIDES = [
  {
    imageUrl: '/home/hero-section/IMG_2144.jpg',
    title: 'LAN Perfume 1',
    description:
      'Nước hoa là nghệ thuật của sự chuyển biến, một bản giao hưởng mùi hương đa chiều thay đổi theo thời gian và nhiệt độ. Chúng tôi tự hào đồng hành cùng khách hàng trong hành trình khám phá những hương thơm độc đáo, phù hợp với cá tính và phong cách riêng, từ đó mang đến sự tự tin trong mọi khoảnh khắc.',
  },
  {
    imageUrl: '/home/hero-section/IMG_2145.jpg',
    title: 'LAN Perfume 2',
    description:
      'Chúng tôi tin rằng mọi thứ xuất phát từ đam mê và khát vọng cá nhân là chìa khóa dẫn đến thành công. Lan Perfume mong muốn lan tỏa nguồn năng lượng tích cực này đến với mọi người. Đặc biệt nhất chính là sự thỏa mãn đam mê về vẻ đẹp của những tầng hương.',
  },
  {
    imageUrl: '/home/hero-section/IMG_2146.jpeg',
    title: 'LAN Perfume 3',
    description:
      'Với phương châm làm việc từ cái tâm cùng chất lượng sản phẩm tốt, Lan Perfume cam kết mang đến sự tin tưởng toàn diện cho người dùng. Mỗi mùi hương từ Lan Perfume không chỉ là một loại trang sức "vô hình", mà còn là sứ điệp chân thành và đặc biệt của từng cá nhân.',
  },
] as const;

const HeroSection = () => {
  return (
    <section className={styles.heroSectionWrapper}>
      <Swiper
        modules={[Autoplay, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        effect="fade"
        autoplay={{ delay: 3000 }}
      >
        {SLIDES.map((item) => (
          <SwiperSlide key={item.imageUrl}>
            <div className="relative top-0 left-0 h-full w-full">
              <Image
                alt={item.title}
                src={item.imageUrl}
                fill
                style={{
                  objectFit: 'cover',
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
