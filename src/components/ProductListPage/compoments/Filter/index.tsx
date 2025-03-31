'use client';

import Accordion from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { Checkbox } from '@/components/ui/Checkbox';
import InputRange from '@/components/ui/InputRange';
import { Label } from '@/components/ui/Label';
import { toVietNamCurrency } from '@/lib/utils';
import { IBrand } from '@/types/brand';
import { IPerffumeCollection } from '@/types/perfumeCollections';

type ChangeHandler = {
  (type: 'brands' | 'collections', value: Set<string>): void;
  (type: 'pricerange', value: [number, number]): void;
};

interface FilterProps {
  brands: IBrand[];
  perfumeCollections: IPerffumeCollection[];
  collectionSelectedNames: Set<string>;
  brandSelectedNames: Set<string>;
  priceRange: [number, number];
  onChange: ChangeHandler;
  onSubmitFilter: () => void;
}

export const MIN_PRICE = 0;
export const MAX_PRICE = 10000000;
export const PRICE_STEP = 1000000;

const Filter = ({
  brands,
  perfumeCollections,
  brandSelectedNames,
  collectionSelectedNames,
  priceRange,
  onChange,
  onSubmitFilter,
}: FilterProps) => {
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

                onChange('collections', newSet);
              }
            }}
          >
            {items.map((item) => (
              <div
                key={item._id}
                className="event-delegation flex cursor-pointer gap-4"
                accessKey={item.name}
              >
                <Checkbox
                  className="cursor-pointer"
                  checked={collectionSelectedNames.has(item.name)}
                />

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
                onChange('brands', newSet);
              }
            }}
          >
            {items.map((item) => (
              <div
                key={item._id}
                className="event-delegation flex cursor-pointer gap-4"
                accessKey={item.name}
              >
                <Checkbox
                  className="cursor-pointer"
                  checked={brandSelectedNames.has(item.name)}
                />

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
          onChange('pricerange', value);
        }}
        label={(value) => (
          <p className="mt-2">
            Price: {toVietNamCurrency(value?.[0] ?? MIN_PRICE)} - {toVietNamCurrency(value?.[1] ?? MAX_PRICE)}
          </p>
        )}
        size="small"
      />

      <Button
        onClick={() => {
          onSubmitFilter();
        }}
      >
        Filter
      </Button>
    </div>
  );
};

export default Filter;
