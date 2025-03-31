'use client';

import PerfumeCard from '@/components/Homepage/ProductSection/components/PerfumeCard';
import { IPerfume } from '@/types/perfume';

interface IProductListProps {
  data: IPerfume[];
  isLoading?: boolean;
}

const ProductList = ({ data, isLoading = false }: IProductListProps) => {
  return (
    <div className={'grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5'}>
      {isLoading && 'Loading ...'}
      {data
        .concat(data)
        .concat(data)
        .map((item) => (
          <PerfumeCard
            key={`${item._id}-${Math.random()}`}
            item={item}
          />
        ))}
    </div>
  );
};

export default ProductList;
