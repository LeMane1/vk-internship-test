import { Counter } from 'src/components/counter/Counter';
import type {CounterSizes, ICounterProps} from 'src/components/counter/Counter';
import './Button.styl'
import Loader from 'src/assets/loader.svg'

type ButtonTypes = 'primary' | 'secondary'
type ButtonSizes = 28 | 36 | 56

interface IButtonProps{
  children: string;
  type?: ButtonTypes;
  size?: ButtonSizes;
  isActive?: boolean;
  isLoading?: boolean;
  counter?: ICounterProps;
  onClick?: () => void;
}

export const Button: React.FC<IButtonProps> = ({
  children = '',
  type = 'primary',
  size = 56,
  isActive = true,
  isLoading = false,
  counter,
  onClick
}) => {

  const getCounterSize = (buttonSize: ButtonSizes): CounterSizes => {
    switch (buttonSize) {
      case 28:
        return 16;
        break;
      case 36:
        return 20;
        break;
      case 56:
        return 24;
        break;
      default:
        return 16
        break;
    }
  }

  const getTruncatedText = (buttonText: string): string => {
    if (buttonText.length > 21){
      return buttonText.slice(0, 21) + '…'
    }
    return buttonText
  }

  return (
    <div className='button-wrapper'>
      <button 
        disabled={!isActive}
        className={`button
                    button-type-${type}
                    button-size-${size}
                    ${!isActive || isLoading? '' : 'overlay'}
        `}
        onClick={onClick}
      >
        {<div className={`  content-wrapper
                            ${isLoading ? 'content-hidden' : ''}
        `}>
          <span className={`
            button-text
            ${counter && counter?.quantity ? 'text-margin' : ''}
          `}>
            {getTruncatedText(children)}
          </span>
          {counter && counter?.quantity &&
          <Counter
            size={getCounterSize(size)}
            type={type}
            customColor={counter.customColor}
            quantity={counter.quantity}
            hasStroke={counter.hasStroke}
            hasPulse={counter.hasPulse}
          />}
        </div>}

        {<div
          className={`loader-wrapper
                      ${isLoading ? '' : 'loader-hidden'}
          `}>
          <img src={Loader} className="loader"/>
        </div>}
      </button>
    </div>
  )
}