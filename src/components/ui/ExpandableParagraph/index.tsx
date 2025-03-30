'use client';

import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { CSSProperties, ReactNode, useRef, useState } from 'react';
import { Button } from '../Button';
import styles from './styles.module.css';

interface ExpandableParagraphProps {
  initialElement: ReactNode;
  expandableElement: ReactNode;
}

const ExpandableParagraph = ({ expandableElement, initialElement }: ExpandableParagraphProps) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const expandableElementMaxHeight = useRef(0);

  return (
    <div className={cn(styles.expandableParagraphWrapper)}>
      {initialElement}
      <div
        ref={(ref) => {
          if (ref?.scrollHeight) expandableElementMaxHeight.current = ref.scrollHeight;
        }}
        style={{ '--max-height': `${expandableElementMaxHeight.current}px` } as CSSProperties}
        className={cn('expandable-element', isShowMore ? 'open' : '')}
      >
        {expandableElement}
      </div>
      <div className="flex justify-center">
        <Button
          variant={'ghost'}
          onClick={() => {
            setIsShowMore((prev) => !prev);
          }}
          className="flex items-center gap-1"
        >
          {isShowMore ? 'See less' : 'See more'}{' '}
          <ChevronDown className={cn('duration-300', isShowMore ? '-rotate-180' : '')} />
        </Button>
      </div>
    </div>
  );
};

export default ExpandableParagraph;
