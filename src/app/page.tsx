import { getPerfumeCollections } from '@/api/perfumeCollections';
import { getPerfumes } from '@/api/perfumes';
import { getFulfilledResponse } from '@/api/utils';
import CollectionsSection from '@/components/Homepage/CollectionsSection';
import HeroSection from '@/components/Homepage/HeroSection';
import ProductSection from '@/components/Homepage/ProductSection';
import SupportSection from '@/components/Homepage/SupportSection';
import TopRecommendedSection from '@/components/Homepage/TopRecommendedSection';

export default async function Home() {
  const [_perfumes, _perfumeCollections] = await Promise.allSettled([
    getPerfumes({ pageSize: 3 }),
    getPerfumeCollections(),
  ]);
  const perfumes = getFulfilledResponse(_perfumes);
  const perfumeCollections = getFulfilledResponse(_perfumeCollections);
  return (
    <div className="">
      <HeroSection />
      <SupportSection />
      <TopRecommendedSection perfumes={perfumes?.responseData?.data ?? []} />
      <CollectionsSection perfumeCollections={perfumeCollections?.responseData?.data ?? []} />
      <ProductSection perfumes={perfumes?.responseData?.data ?? []} />
    </div>
  );
}
