import { useState } from 'react'
import { Counter, ICounterProps } from './components/counter/Counter'
import { Button } from './components/button/Button'

const CustomCounter: ICounterProps = {
  quantity: 23,
  customColor: '#FFFFFF20',
}

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  // For test request
  const getTodos = () => {
    setIsLoading(true)
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.error(err))
      .finally(() => setIsLoading(false))
  }

  return (
    <>
      <section style={{marginBottom: '32px'}}>
        <h3>Counter</h3>
        <Counter
          type='primary'
          size={24}
          hasPulse={false}
          hasStroke={false}
          quantity={12}
        />
      </section>

      <hr/>

      <section>
        <h3>Button</h3>
        <Button
          isActive={true}
          isLoading={isLoading}
          size={56}
          type='primary'
          counter={CustomCounter}
          onClick={getTodos}
        >
          Что-то сделать
        </Button>
      </section>
    </>
  )
}

export default App
