import { IBrand } from '@/types/brand';
import { IPerffumeCollection } from '@/types/perfumeCollections';
import HeaderWrapper from './HeaderWrapper';

interface HeaderProps {
  brands: IBrand[];
  perfumeCollections: IPerffumeCollection[];
}

const Header = async ({ brands, perfumeCollections }: HeaderProps) => {
  return (
    <header>
      <HeaderWrapper
        brands={brands}
        perfumeCollections={perfumeCollections}
      />
    </header>
  );
};

export default Header;
