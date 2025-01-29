import { Counter, ICounterProps } from './components/counter/Counter'
import { Button } from './components/button/Button'

const CustomCounter: ICounterProps = {
  type: 'primary',
  quantity: 23,
  customColor: '#FFFFFF20',
}

function App() {
  return (
    <>
      <Counter
        type='primary'
        size={24}
        hasPulse={true}
        hasStroke={false}
        quantity={123}
      />
      <Button
        isActive={true}
        isLoading={false}
        size={56}
        type='primary'
        counter={CustomCounter}
        onClick={() => console.log('Что-то отправлено')}
      >
        Что-то сделать
      </Button>
    </>
  )
}

export default App
