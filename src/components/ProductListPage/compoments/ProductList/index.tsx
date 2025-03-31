'use client';

import { perfumeParamsConfigMap } from '@/api/perfumes/types';
import { useGetPerfumesQuery } from '@/api/queries/perfumes';
import PerfumeCard from '@/components/Homepage/ProductSection/components/PerfumeCard';
import LoadingOverlay from '@/components/ui/LoadingOverlay';
import { SkeletonCard } from '@/components/ui/Skeleton/SkeletonCard';
import { decodeQueryParams } from '@/lib/utils';
import { ResponseDataObject } from '@/types';
import { IPerfume } from '@/types/perfume';
import { IPerfumeFilter } from '@/types/perfume/filter';
import { useSearchParams } from 'next/navigation';

interface ProductListProps {
  initData?: ResponseDataObject<IPerfume[]>;
}

const SKELETON_ITEMS = new Array(20).fill(0).map((_, i) => i + 1);

const ProductList = ({}: ProductListProps) => {
  const searchParams = useSearchParams();
  const filterValues = decodeQueryParams<IPerfumeFilter>(perfumeParamsConfigMap, searchParams.toString());
  const { data: _data, isFetching } = useGetPerfumesQuery(filterValues);
  const data = _data?.responseData?.data ?? [];

  return (
    <div className={'relative grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-5'}>
      {data.length > 0 &&
        data.concat(data).map((item) => (
          <PerfumeCard
            key={`${item._id}-${Math.random()}`}
            item={item}
          />
        ))}

      {data.length === 0 && SKELETON_ITEMS.map((i) => <SkeletonCard key={i} />)}
      <LoadingOverlay
        className="text-7xl"
        show={isFetching}
      />
    </div>
  );
};

export default ProductList;
