import './PulseIndicator.styl'
import type { CounterSizes, СounterTypes } from './Counter';

export type PulseIndicatorSizeTypes = Exclude<CounterSizes, 16 | 20 | 24>;

interface IPulseIndicatorProps{
  children: React.ReactNode;
  isActive: boolean;
  size: PulseIndicatorSizeTypes;
  type: СounterTypes;
}

export const PulseIndicator:React.FC<IPulseIndicatorProps> = ({
  children,
  isActive = false,
  size = 8,
  type = 'primary'
}) => {
  return (
    <>
      
      <div className={` pulse-indicator
                        pulse-indicator-size-${size}
                        pulse-indicator-${type}
      `}>
          <div className="children-wrapper">
            {children}
          </div>
        {isActive && <div className="pulse one"></div>}
        {isActive && <div className="pulse two"></div>}
      </div>
    </>
  )
}