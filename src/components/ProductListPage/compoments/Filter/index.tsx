import Accordion from '@/components/ui/Accordion';
import { Checkbox } from '@/components/ui/Checkbox';
import InputRange from '@/components/ui/InputRange';
import { Label } from '@/components/ui/Label';
import { toVietNamCurrency } from '@/lib/utils';
import { IBrand } from '@/types/brand';
import { IPerffumeCollection } from '@/types/perfumeCollections';
import { useState } from 'react';
import { ReactRangeSliderInputProps } from 'react-range-slider-input';

interface FilterProps {
  brands: IBrand[];
  perfumeCollections: IPerffumeCollection[];
}

const MIN_PRICE = 0;
const MAX_PRICE = 10000000;
const PRICE_STEP = 1000000;

const Filter = ({ brands, perfumeCollections }: FilterProps) => {
  const [collectionSelectedNames, setCollectionSelectedNames] = useState<Set<string>>(new Set([]));
  const [brandSelectedNames, setBrandSelectedNames] = useState<Set<string>>(new Set([]));
  const [priceRange, setPriceRange] = useState<ReactRangeSliderInputProps['value']>([MIN_PRICE, MAX_PRICE]);

  return (
    <div className="flex flex-col gap-3">
      <Accordion
        defaultOpen={true}
        items={perfumeCollections}
        renderTriggerItem={() => <p className="mb-2 text-lg font-semibold">Collections</p>}
        renderItems={(items) => (
          <div
            className="flex flex-col gap-2"
            onClick={(e) => {
              const target = (e.target as HTMLElement).closest('div.event-delegation') as HTMLElement;
              const newSet = new Set(collectionSelectedNames);
              if (target) {
                if (newSet.has(target.accessKey)) {
                  newSet.delete(target.accessKey);
                } else {
                  newSet.add(target.accessKey);
                }
                setCollectionSelectedNames(newSet);
              }
            }}
          >
            {items.map((item) => (
              <div
                key={item._id}
                className="event-delegation flex cursor-pointer gap-4"
                accessKey={item.name}
              >
                <Checkbox checked={collectionSelectedNames.has(item.name)} />

                <Label htmlFor={item._id}>{item.name}</Label>
              </div>
            ))}
          </div>
        )}
      />
      <Accordion
        defaultOpen={true}
        items={brands}
        renderTriggerItem={() => <p className="mb-2 text-lg font-semibold">Brands</p>}
        renderItems={(items) => (
          <div
            className="flex flex-col gap-2"
            onClick={(e) => {
              const target = (e.target as HTMLElement).closest('div.event-delegation') as HTMLElement;
              const newSet = new Set(brandSelectedNames);
              if (target) {
                if (newSet.has(target.accessKey)) {
                  newSet.delete(target.accessKey);
                } else {
                  newSet.add(target.accessKey);
                }
                setBrandSelectedNames(newSet);
              }
            }}
          >
            {items.map((item) => (
              <div
                key={item._id}
                className="event-delegation flex cursor-pointer gap-4"
                accessKey={item.name}
              >
                <Checkbox checked={brandSelectedNames.has(item.name)} />

                <Label htmlFor={item._id}>{item.name}</Label>
              </div>
            ))}
          </div>
        )}
      />

      <InputRange
        min={MIN_PRICE}
        max={MAX_PRICE}
        step={PRICE_STEP}
        value={priceRange}
        onInput={(value) => {
          setPriceRange(value);
        }}
        label={(value) => (
          <p className="mt-2">
            Price: {toVietNamCurrency(value?.[0] ?? MIN_PRICE)} - {toVietNamCurrency(value?.[1] ?? MAX_PRICE)}
          </p>
        )}
        size="small"
      />
    </div>
  );
};

export default Filter;
