import './Counter.styl'
import { PulseIndicator } from './PulseIndicator';
import type { PulseIndicatorSizeTypes } from './PulseIndicator';

export type СounterTypes = 'primary' | 'secondary'
export type CounterSizes = 8 | 12 | 16 | 20 | 24

const restrictedTextSizes: PulseIndicatorSizeTypes[] = [8, 12]

interface ICounterProps {
  type?: СounterTypes;
  size?: CounterSizes;
  hasStroke?: boolean;
  quantity?: number | string;
  hasPulse?: boolean;
}

export const Counter: React.FC<ICounterProps> = ({
  type = 'primary',
  size = 8,
  hasStroke = false,
  quantity = 9,
  hasPulse = false
}) => {

  return (
    <>
      <PulseIndicator isActive={hasPulse} size={size as PulseIndicatorSizeTypes} type={type}>
        <div className={` counter-wrapper
                          counter-size-${size}
                          counter-type-${type}
                          ${hasStroke ? 'counter-stroke' : ''}
        `}>
          {!restrictedTextSizes.includes(size as PulseIndicatorSizeTypes) &&
          <p className={`counter-text-size-${size}`}>{quantity}</p>}
        </div>
      </PulseIndicator>
    </>
  )
}