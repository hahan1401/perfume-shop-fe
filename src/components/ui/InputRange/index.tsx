'use client';

import { ReactNode } from 'react';
import RangeSlider, { ReactRangeSliderInputProps } from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import styles from './styles.module.css';

interface InputRange extends ReactRangeSliderInputProps {
  label?: (value: ReactRangeSliderInputProps['value']) => ReactNode;
  size?: 'small' | 'medium';
}

const InputRange = ({ label, size = 'medium', ...props }: InputRange) => {
  return (
    <div
      className={styles.inputRangeWrapper}
      data-size={size}
    >
      <RangeSlider {...props} />
      {label?.(props.value)}
    </div>
  );
};

export default InputRange;
