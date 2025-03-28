import { IBrand } from '@/types/brand';
import { IPerffumeCollection } from '@/types/perfumeCollections';

export interface MobileHeaderProps {
  brands: IBrand[];
  perfumeCollections: IPerffumeCollection[];
  isAtTopPage: boolean;
}
