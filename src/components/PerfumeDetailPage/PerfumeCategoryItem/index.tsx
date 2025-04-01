import { Perfume } from '@/components/ui/icons/components/Perfume';
import { ReactNode } from 'react';

interface PerfumeCategoryItemProps {
  icon?: ReactNode;
  label: ReactNode;
  value: ReactNode;
}

const PerfumeCategoryItem = ({ label, value }: PerfumeCategoryItemProps) => {
  return (
    <div className="flex items-center gap-3">
      <Perfume className="text-4xl" />
      <div>
        <p className="lg font-semibold">{label}</p>
        <p className="">{value}</p>
      </div>
    </div>
  );
};

export default PerfumeCategoryItem;
