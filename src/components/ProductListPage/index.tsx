'use client';

import { IBrand } from '@/types/brand';
import { IPerffumeCollection } from '@/types/perfumeCollections';
import 'react-range-slider-input/dist/style.css';
import PageContainer from '../ui/PageContainer';
import Filter from './compoments/Filter';
import ProductList from './compoments/ProductList';

interface ProductListPageProps {
  brands: IBrand[];
  perfumeCollections: IPerffumeCollection[];
}

const ProductListPage = ({ brands, perfumeCollections }: ProductListPageProps) => {
  return (
    <PageContainer className="flex flex-col gap-4 md:flex-row">
      <div className="border-border/70 shrink-0 basis-72 rounded-xs border p-3">
        <Filter
          brands={brands}
          perfumeCollections={perfumeCollections}
        />
      </div>
      <div className="flex-1">
        <ProductList />
      </div>
    </PageContainer>
  );
};

export default ProductListPage;
