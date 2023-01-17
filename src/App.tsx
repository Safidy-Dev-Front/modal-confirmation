import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ConfirmDialog from './components/ConfirmDialog'
import { confirm } from './components/ConfirmGlobal'

function App() {
  const [count, setCount] = useState(0)
  const increment = async () => {
    if(await confirm()){
      setCount(count + 1)
    }
  }
  return (
    <div className="App">
      
      <div className="card">
        <button onClick={increment}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
