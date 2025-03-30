import { getBrands } from '@/api/brand';
import { getPerfumeCollections } from '@/api/perfumeCollections';
import { getPerfumes } from '@/api/perfumes';
import { perfumeParamsConfigMap, TPerfumeSearchParams } from '@/api/perfumes/types';
import { getFulfilledResponse } from '@/api/utils';
import ProductListPage from '@/components/ProductListPage';
import { decodeQueryParams, toQueryString } from '@/lib/utils';
import { IPerfumeFilter } from '@/types/perfume/filter';

const page = async ({ searchParams }: { searchParams: Promise<Record<TPerfumeSearchParams, string>> }) => {
  const _seachparams = await searchParams.then((resp) =>
    decodeQueryParams<IPerfumeFilter>(perfumeParamsConfigMap, resp),
  );

  const a = toQueryString(perfumeParamsConfigMap, { pageSize: 10, brands: ['a', 'b'] });
  console.log('a', a);

  console.log('_seachparams', _seachparams);
  const [_perfumes, _brand, _perfumeCollections] = await Promise.allSettled([
    getPerfumes(_seachparams),
    getBrands(),
    getPerfumeCollections(),
  ]);
  const perfumes = getFulfilledResponse(_perfumes);
  const brands = getFulfilledResponse(_brand);
  const perfumeCollections = getFulfilledResponse(_perfumeCollections);
  return (
    <ProductListPage
      brands={brands?.responseData?.data ?? []}
      perfumeCollections={perfumeCollections?.responseData?.data ?? []}
      initData={perfumes?.responseData}
    />
  );
};

export default page;
