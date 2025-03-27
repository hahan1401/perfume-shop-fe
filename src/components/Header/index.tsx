import { getBrands } from '@/api/brand';
import { getPerfumeCollections } from '@/api/perfumeCollections';
import { getFulfilledResponse } from '@/api/utils';
import DesktopHeader from './Desktop';
import MobileHeader from './Mobile';

const Header = async () => {
  const [_brand, _perfumeCollections] = await Promise.allSettled([getBrands(), getPerfumeCollections()]);
  const brands = getFulfilledResponse(_brand);
  const perfumeCollections = getFulfilledResponse(_perfumeCollections);
  return (
    <>
      <DesktopHeader
        brands={brands?.responseData?.data ?? []}
        perfumeCollentions={perfumeCollections?.responseData?.data ?? []}
      />
      <MobileHeader
        brands={brands?.responseData?.data ?? []}
        perfumeCollentions={perfumeCollections?.responseData?.data ?? []}
      />
    </>
  );
};

export default Header;
