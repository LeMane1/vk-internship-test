import './Button.styl'

type ButtonTypes = 'primary' | 'secondary'
type ButtonSizes = 28 | 36 | 56

interface IButtonProps{
  children: string;
  type?: ButtonTypes;
  size?: ButtonSizes;
  isActive?: boolean;
  isLoading?: boolean;
  hasCounter?: boolean;
}

export const Button: React.FC<IButtonProps> = ({
  children = '',
  type = 'primary',
  size = 28,
  isActive = true,
  // isLoading = false,
  // hasCounter = false,
}) => {
  return (
    <>
      <button 
        disabled={!isActive}
        className={`button-type-${type}
                    button-size-${size}
        `}
      >
        {children}
      </button>
    </>
  )
}