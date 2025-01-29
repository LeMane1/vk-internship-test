import './PulseIndicator.styl'
import type { СounterTypes } from './Counter';

interface IPulseIndicatorProps{
  children: React.ReactNode;
  isActive?: boolean;
  type?: СounterTypes;
  customColor?: string;
}

export const PulseIndicator:React.FC<IPulseIndicatorProps> = ({
  children,
  isActive = false,
  type = 'primary',
  customColor = ''
}) => {
  return (
    <div className='pulse-wrapper'>
      <div className={` pulse-indicator
                        pulse-indicator-${type}
      `}>
        {children}
        {isActive && <div className="pulse one" style={{backgroundColor: customColor}}></div>}
        {isActive && <div className="pulse two" style={{backgroundColor: customColor}}></div>}
      </div>
    </div>
  )
}