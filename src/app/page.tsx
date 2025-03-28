import { getPerfumes } from '@/api/perfumes';
import HeroSection from '@/components/Homepage/HeroSection';
import ProductSection from '@/components/Homepage/ProductSection';
import SupportSection from '@/components/Homepage/SupportSection';

export default async function Home() {
  const perfumes = await getPerfumes({ pageSize: 3 });
  return (
    <div className="">
      <HeroSection />
      <SupportSection />
      <ProductSection perfumes={perfumes.responseData?.data ?? []} />
    </div>
  );
}
