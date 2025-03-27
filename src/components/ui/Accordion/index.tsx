'use client;';

import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { CSSProperties, useRef, useState } from 'react';
import styles from './styles.module.css';
import { IAccordionProps } from './types';

const Accordion = <T,>({ renderItem, renderTriggerItem, items }: IAccordionProps<T>) => {
  const [showArcoding, setShowArcoding] = useState(false);
  const menuHeight = useRef<number | undefined>(0);

  const onTriggerElementClicked = () => {
    setShowArcoding((prev) => !prev);
  };

  return (
    <div className="">
      <button
        onClick={() => {
          onTriggerElementClicked();
        }}
        className="flex w-full cursor-pointer justify-between"
      >
        {renderTriggerItem()}
        <ChevronDown className={cn(`${showArcoding ? '-rotate-90' : ''}`, 'duration-300')} />
      </button>

      <div
        ref={(ref) => {
          menuHeight.current = ref?.scrollHeight;
        }}
        className={cn('top-full flex flex-col gap-2 pl-4', styles.arcodingContentWrapper)}
        data-open={showArcoding}
        style={
          {
            '--max-height': `${menuHeight.current}px`,
          } as CSSProperties
        }
      >
        {items.map((item) => renderItem(item))}
      </div>
    </div>
  );
};

export default Accordion;
