import { FC, SVGProps } from 'react';
import Icon from '../svgs/message.svg';

export const Message: FC<SVGProps<SVGElement>> = (props) => {
  return <Icon {...props} />;
};
