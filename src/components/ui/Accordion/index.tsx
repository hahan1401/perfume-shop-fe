'use client;';

import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { CSSProperties, useState } from 'react';
import styles from './styles.module.css';
import { IAccordionProps } from './types';

const Accordion = <T,>({
  renderItems,
  renderTriggerItem,
  items,
  defaultOpen = false,
  ...props
}: IAccordionProps<T>) => {
  const [showArcoding, setShowArcoding] = useState(defaultOpen);
  const [menuHeight, setMenuHeight] = useState(0);

  const onTriggerElementClicked = () => {
    setShowArcoding((prev) => !prev);
  };

  return (
    <div {...props}>
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
          if (!menuHeight && ref?.scrollHeight) setMenuHeight(ref.scrollHeight);
        }}
        className={cn('top-full flex flex-col gap-2 pl-4', styles.arcodingContentWrapper)}
        data-open={showArcoding}
        style={
          {
            '--max-height': `${menuHeight}px`,
          } as CSSProperties
        }
      >
        {/* {items.map((item) => renderItem(item))} */}
        {renderItems(items)}
      </div>
    </div>
  );
};

export default Accordion;
