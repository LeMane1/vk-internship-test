import './Counter.styl'
import { PulseIndicator } from './PulseIndicator';

export type СounterTypes = 'primary' | 'secondary'
export type CounterSizes = 8 | 12 | 16 | 20 | 24

const restrictedTextSizes: number[] = [8, 12]

interface ICounterProps {
  type?: СounterTypes;
  size?: CounterSizes;
  hasStroke?: boolean;
  quantity?: number | string;
  hasPulse?: boolean;
}

export const Counter: React.FC<ICounterProps> = ({
  type = 'primary',
  size = 24,
  hasStroke = false,
  quantity = 0,
  hasPulse = false
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
      <PulseIndicator isActive={hasPulse && restrictedTextSizes.includes(size)} type={type}>
        <div className={` counter-wrapper
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