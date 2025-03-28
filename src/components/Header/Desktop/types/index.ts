import { IBrand } from '@/types/brand';
import { IPerffumeCollection } from '@/types/perfumeCollections';

export interface DestopHeaderProps {
  brands: IBrand[];
  perfumeCollections: IPerffumeCollection[];
  isAtTopPage: boolean;
}
