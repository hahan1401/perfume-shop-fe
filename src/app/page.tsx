import { getPerfumes } from '@/api/perfumes';
import HeroSection from '@/components/Homepage/HeroSection';
import ProductSection from '@/components/Homepage/ProductSection';
import SupportSection from '@/components/Homepage/SupportSection';
import TopRecommendedSection from '@/components/Homepage/TopRecommendedSection';

export default async function Home() {
  const perfumes = await getPerfumes({ pageSize: 3 });
  return (
    <div className="">
      <HeroSection />
      <SupportSection />
      <TopRecommendedSection perfumes={perfumes.responseData?.data ?? []} />
      <ProductSection perfumes={perfumes.responseData?.data ?? []} />
    </div>
  );
}
