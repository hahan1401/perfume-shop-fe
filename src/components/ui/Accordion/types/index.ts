import { ReactNode } from 'react';

export interface IAccordionProps<T = unknown> {
  renderTriggerItem: () => ReactNode;
  renderItem: (item: T) => ReactNode;
  items: T[];
}
