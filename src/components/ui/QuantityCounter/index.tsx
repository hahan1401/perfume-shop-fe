import { Button } from '../Button';
import { CircleMinus } from '../icons/components/CircleMinus';
import { CirclePlus } from '../icons/components/CirclePlus';

interface QuantityCounterProps {
  value?: number;
  onChange?: (value: number) => void;
  disabled?: boolean;
}

const QuantityCounter = ({ value = 1, onChange, disabled }: QuantityCounterProps) => {
  return (
    <div className="flex h-fit w-fit items-center gap-4 rounded-3xl border bg-white">
      <Button
        variant={'ghost'}
        className="aspect-square p-0"
        disabled={disabled || value === 1}
        onClick={() => {
          if (value > 1) {
            onChange?.(value - 1);
          }
        }}
      >
        <CircleMinus className="text-primary h-auto w-auto cursor-pointer text-xl" />
      </Button>
      <p className="text-center">{value}</p>
      <Button
        variant={'ghost'}
        className="aspect-square p-0"
        onClick={() => {
          onChange?.(value + 1);
        }}
        disabled={disabled}
      >
        <CirclePlus className="text-primary h-auto w-auto cursor-pointer text-xl" />
      </Button>
    </div>
  );
};

export default QuantityCounter;
