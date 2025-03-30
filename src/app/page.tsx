import { getBrands } from '@/api/brand';
import { getPerfumeCollections } from '@/api/perfumeCollections';
import { getPerfumes } from '@/api/perfumes';
import { getFulfilledResponse } from '@/api/utils';
import AboutSection from '@/components/Homepage/AboutSection';
import BrandSection from '@/components/Homepage/BrandSection';
import CollectionsSection from '@/components/Homepage/CollectionsSection';
import HeroSection from '@/components/Homepage/HeroSection';
import ProductSection from '@/components/Homepage/ProductSection';
import SupportSection from '@/components/Homepage/SupportSection';
import TopRecommendedSection from '@/components/Homepage/TopRecommendedSection';

export default async function Home() {
  const [_perfumes, _perfumeCollections, _brands] = await Promise.allSettled([
    getPerfumes({ pageSize: 3 }),
    getPerfumeCollections(),
    getBrands(),
  ]);
  const perfumes = getFulfilledResponse(_perfumes);
  const perfumeCollections = getFulfilledResponse(_perfumeCollections);
  const brands = getFulfilledResponse(_brands);
  return (
    <div className="">
      <HeroSection />
      <SupportSection />
      <TopRecommendedSection perfumes={perfumes?.responseData?.data ?? []} />
      <CollectionsSection perfumeCollections={perfumeCollections?.responseData?.data ?? []} />
      <ProductSection perfumes={perfumes?.responseData?.data ?? []} />
      <BrandSection brands={brands?.responseData?.data ?? []} />
      <AboutSection />
    </div>
  );
}
