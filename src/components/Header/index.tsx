import { getBrands } from '@/api/brand';
import { getPerfumeCollections } from '@/api/perfumeCollections';
import { getFulfilledResponse } from '@/api/utils';
import HeaderWrapper from './HeaderWrapper';

const Header = async () => {
  const [_brand, _perfumeCollections] = await Promise.allSettled([getBrands(), getPerfumeCollections()]);
  const brands = getFulfilledResponse(_brand);
  const perfumeCollections = getFulfilledResponse(_perfumeCollections);
  return (
    <header>
      <HeaderWrapper
        brands={brands?.responseData?.data ?? []}
        perfumeCollections={perfumeCollections?.responseData?.data ?? []}
      />
    </header>
  );
};

export default Header;
