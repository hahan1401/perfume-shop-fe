import { getPerfumeByName } from '@/api/perfumes';
import PerfumeDetailPage from '@/components/PerfumeDetailPage';
import { notFound } from 'next/navigation';

const page = async ({ params }: { params: Promise<{ name: string }> }) => {
  const { name } = await params.then((resp) => ({ name: decodeURIComponent(resp.name) }));
  const data = await getPerfumeByName(name);

  if (!data.responseData?.data) return notFound();

  return (
    <PerfumeDetailPage
      data={{ ...data.responseData.data, prices: data.responseData.data.prices.sort((a, b) => a.price - b.price) }}
    />
  );
};

export default page;
