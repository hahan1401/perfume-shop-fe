import Image from '@/components/ui/Image';
import { cn, toVietNamCurrency } from '@/lib/utils';
import { IPerfume } from '@/types/perfume';
import Link from 'next/link';
import styles from './styles.module.css';

interface PerfumeCardProps {
  item: IPerfume;
}

const PerfumeCard = ({ item }: PerfumeCardProps) => {
  return (
    <Link
      href={`/product/${encodeURIComponent(item.name)}`}
      className={cn(styles.perfumeCardWrapper, 'shadow-xl')}
    >
      <div className="product-image-wrapper p-4">
        <Image
          className="product-image"
          alt={item.name}
          src={item.imageUrl}
          ratio="1:1"
        />
        <p className="absolute top-4 right-4 bg-transparent text-xl font-semibold">{item.brand}</p>
      </div>
      <div className="p-4">
        <p className="text-center">{item.name}</p>
        <p className="text-center">{toVietNamCurrency(item.price)}</p>
      </div>
    </Link>
  );
};

export default PerfumeCard;
