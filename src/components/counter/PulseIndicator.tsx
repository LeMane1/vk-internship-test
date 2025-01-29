import './PulseIndicator.styl'
import type { СounterTypes } from './Counter';

interface IPulseIndicatorProps{
  children: React.ReactNode;
  isActive: boolean;
  type: СounterTypes;
}

export const PulseIndicator:React.FC<IPulseIndicatorProps> = ({
  children,
  isActive = false,
  type = 'primary'
}) => {
  return (
    <div className='pulse-wrapper'>
      <div className={` pulse-indicator
                        pulse-indicator-${type}
      `}>
          <div className="children-wrapper">
            {children}
          </div>
        {isActive && <div className="pulse one"></div>}
        {isActive && <div className="pulse two"></div>}
      </div>
    </div>
  )
}