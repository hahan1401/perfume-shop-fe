import { ReactNode } from 'react';
import ReactQueryProvider from './ReactQueryProvider';

const Provider = ({ children }: { children: ReactNode }) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};

export default Provider;
