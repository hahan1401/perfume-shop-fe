'use client';

import { IBrand } from '@/types/brand';
import { IPerffumeCollection } from '@/types/perfumeCollections';
import 'react-range-slider-input/dist/style.css';
import PageContainer from '../ui/PageContainer';
import Filter from './compoments/Filter';

interface ProductListPageProps {
  brands: IBrand[];
  perfumeCollections: IPerffumeCollection[];
}

const ProductListPage = ({ brands, perfumeCollections }: ProductListPageProps) => {
  return (
    <PageContainer className="flex gap-4">
      <div className="border-border/70 basis-72 rounded-xs border p-3">
        <Filter
          brands={brands}
          perfumeCollections={perfumeCollections}
        />
      </div>
      <div className="flex-1">product list</div>
    </PageContainer>
  );
};

export default ProductListPage;
