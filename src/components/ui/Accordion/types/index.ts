import { HTMLAttributes, ReactNode } from 'react';

export interface IAccordionProps<T = unknown> extends HTMLAttributes<HTMLDivElement> {
  renderTriggerItem: () => ReactNode;
  renderItems: (item: T[]) => ReactNode;
  items: T[];
  defaultOpen?: boolean;
}
