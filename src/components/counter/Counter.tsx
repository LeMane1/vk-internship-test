import './Counter.styl'
import { PulseIndicator } from './PulseIndicator';

export type СounterTypes = 'primary' | 'secondary'
export type CounterSizes = 8 | 12 | 16 | 20 | 24

const restrictedTextSizes: number[] = [8, 12]

export interface ICounterProps {
  type?: СounterTypes;
  size?: CounterSizes;
  hasStroke?: boolean;
  quantity: number | string;
  hasPulse?: boolean;
  customColor?: string;
}

export const Counter: React.FC<ICounterProps> = ({
  type = 'primary',
  size = 24,
  hasStroke = false,
  quantity = 0,
  hasPulse = false,
  customColor = ''
}) => {

  const getValidatedQuantity = (quantity: number | string): string => {
    if (typeof quantity == "number"){
      if (quantity > 99){
        return '99+'
      }else{
        return quantity.toString()
      }
    }else{
      if (quantity.length > 3){
        return quantity.slice(0,3)
      }else{
        return quantity
      }
    }
  }

  return (
    <>
      <PulseIndicator
        isActive={hasPulse && restrictedTextSizes.includes(size)}
        type={type}
        customColor={customColor}
      >
        <div 
          style={{
            backgroundColor: customColor
          }}
          className={` counter-wrapper
                          counter-size-${size}
                          counter-type-${type}
                          ${hasStroke ? 'counter-stroke' : ''}
        `}>
          {!restrictedTextSizes.includes(size) &&
          <p className={`counter-text-size-${size}`}>{getValidatedQuantity(quantity)}</p>}
        </div>
      </PulseIndicator>
    </>
  )
}