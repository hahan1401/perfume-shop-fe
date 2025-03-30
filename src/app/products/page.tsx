import { getBrands } from '@/api/brand';
import { getPerfumeCollections } from '@/api/perfumeCollections';
import { getFulfilledResponse } from '@/api/utils';
import ProductListPage from '@/components/ProductListPage';

const page = async () => {
  const [_brand, _perfumeCollections] = await Promise.allSettled([getBrands(), getPerfumeCollections()]);
  const brands = getFulfilledResponse(_brand);
  const perfumeCollections = getFulfilledResponse(_perfumeCollections);
  return (
    <ProductListPage
      brands={brands?.responseData?.data ?? []}
      perfumeCollections={perfumeCollections?.responseData?.data ?? []}
    />
  );
};

export default page;
