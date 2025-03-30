'use client';

import { ResponseDataObject } from '@/types';
import { IBrand } from '@/types/brand';
import { IPerfume } from '@/types/perfume';
import { IPerffumeCollection } from '@/types/perfumeCollections';
import 'react-range-slider-input/dist/style.css';
import PageContainer from '../ui/PageContainer';
import Filter from './compoments/Filter';
import ProductList from './compoments/ProductList';

interface ProductListPageProps {
  brands: IBrand[];
  perfumeCollections: IPerffumeCollection[];
  initData?: ResponseDataObject<IPerfume[]>;
}

const ProductListPage = ({ brands, perfumeCollections, initData }: ProductListPageProps) => {
  return (
    <PageContainer className="flex flex-col gap-4 md:flex-row">
      <div className="border-border/70 shrink-0 basis-72 rounded-xs border p-3">
        <Filter
          brands={brands}
          perfumeCollections={perfumeCollections}
        />
      </div>
      <div className="flex-1">
        <ProductList initData={initData} />
      </div>
    </PageContainer>
  );
};

export default ProductListPage;
