'use client';

import { perfumeParamsConfigMap, PerfumeSeachParamsEnum } from '@/api/perfumes/types';
import { useGetPerfumesQuery } from '@/api/queries/perfume';
import { decodeQueryParams, toQueryString } from '@/lib/utils';
import { IBrand } from '@/types/brand';
import { IPerfumeFilter } from '@/types/perfume/filter';
import { IPerffumeCollection } from '@/types/perfumeCollections';
import { useSearchParams } from 'next/navigation';
import { useRef, useState } from 'react';
import 'react-range-slider-input/dist/style.css';
import PageContainer from '../ui/PageContainer';
import Filter, { MAX_PRICE, MIN_PRICE } from './compoments/Filter';
import ProductList from './compoments/ProductList';

interface ProductListPageProps {
  brands: IBrand[];
  perfumeCollections: IPerffumeCollection[];
}

const ProductListPage = ({ brands, perfumeCollections }: ProductListPageProps) => {
  const searchParams = useSearchParams();
  const filterValues = useRef(decodeQueryParams<IPerfumeFilter>(perfumeParamsConfigMap, searchParams.toString()));

  const [collectionSelectedNames, setCollectionSelectedNames] = useState<Set<string>>(new Set([]));
  const [brandSelectedNames, setBrandSelectedNames] = useState<Set<string>>(new Set([]));
  const [priceRange, setPriceRange] = useState<[number, number]>([MIN_PRICE, MAX_PRICE]);

  const { data: _data, isFetching, refetch } = useGetPerfumesQuery(filterValues.current);
  const data = _data?.responseData?.data ?? [];
  console.log('isLoading', isFetching);

  const onSubmitFilter = () => {
    const _filterValues = {
      [PerfumeSeachParamsEnum.brands]: [...brandSelectedNames],
      [PerfumeSeachParamsEnum.collections]: [...collectionSelectedNames],
      [PerfumeSeachParamsEnum.minPrice]: priceRange[0],
      [PerfumeSeachParamsEnum.maxPrice]: priceRange[1],
    };
    console.log('123');
    const queryString = toQueryString(perfumeParamsConfigMap, _filterValues);
    window.history.pushState('', '', `?${queryString}`);
    refetch();
  };

  return (
    <PageContainer className="flex flex-col gap-4 md:flex-row">
      <div className="border-border/70 shrink-0 basis-72 rounded-xs border p-3">
        <Filter
          brands={brands}
          perfumeCollections={perfumeCollections}
          collectionSelectedNames={collectionSelectedNames}
          brandSelectedNames={brandSelectedNames}
          priceRange={priceRange}
          onChange={(type, value) => {
            if (type === 'brands') setBrandSelectedNames(value as Set<string>);
            if (type === 'collections') setCollectionSelectedNames(value as Set<string>);
            if (type === 'pricerange') setPriceRange(value as [number, number]);
          }}
          onSubmitFilter={() => {
            onSubmitFilter();
          }}
        />
      </div>
      <div className="flex-1">
        <ProductList
          isLoading={isFetching}
          data={data}
        />
      </div>
    </PageContainer>
  );
};

export default ProductListPage;
