import PerfumeCard from '@/components/Homepage/ProductSection/components/PerfumeCard';
import { ResponseDataObject } from '@/types';
import { IPerfume } from '@/types/perfume';
import { useState } from 'react';

interface ProductListProps {
  initData?: ResponseDataObject<IPerfume[]>;
}

const ProductList = ({ initData }: ProductListProps) => {
  const [data, setData] = useState<ResponseDataObject<IPerfume[]>>(initData ?? { data: [], total: 0 });
  return (
    <div className={'grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5'}>
      {data.data
        .concat(data.data)
        .concat(data.data)
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
