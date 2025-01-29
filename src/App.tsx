import { Counter } from './components/counter/Counter'
import { Button } from './components/button/Button'

function App() {
  return (
    <>
      <Counter size={12} hasPulse={true} quantity={1}/>
      <Button>
        Что-то сделать
      </Button>
    </>
  )
}

export default App
