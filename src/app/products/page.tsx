import { getBrands } from '@/api/brand';
import { getPerfumeCollections } from '@/api/perfumeCollections';
import { getPerfumes } from '@/api/perfumes';
import { perfumeParamsConfigMap, TPerfumeSearchParams } from '@/api/perfumes/types';
import { QUERY_KEYS } from '@/api/queries/CONSTANTS';
import { getFulfilledResponse } from '@/api/utils';
import ProductListPage from '@/components/ProductListPage';
import { decodeQueryParams } from '@/lib/utils';
import { IPerfumeFilter } from '@/types/perfume/filter';
import { QueryClient } from '@tanstack/react-query';

const page = async ({ searchParams }: { searchParams: Promise<Record<TPerfumeSearchParams, string>> }) => {
  const _seachparams = await searchParams.then((resp) =>
    decodeQueryParams<IPerfumeFilter>(perfumeParamsConfigMap, resp),
  );

  const queryClient = new QueryClient();

  const [_brand, _perfumeCollections] = await Promise.allSettled([
    getBrands(),
    getPerfumeCollections(),
    queryClient.prefetchQuery({
      queryKey: [QUERY_KEYS.PERFUMES_LIST],
      queryFn: () => getPerfumes(_seachparams),
    }),
  ]);
  const brands = getFulfilledResponse(_brand);
  const perfumeCollections = getFulfilledResponse(_perfumeCollections);
  return (
    // <HydrationBoundary state={dehydrate(queryClient)}>
    <ProductListPage
      brands={brands?.responseData?.data ?? []}
      perfumeCollections={perfumeCollections?.responseData?.data ?? []}
    />
    // </HydrationBoundary>
  );
};

export default page;
