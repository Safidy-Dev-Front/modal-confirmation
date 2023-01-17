import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ConfirmDialog from './components/ConfirmDialog'

function App() {
  const [count, setCount] = useState(0)
  const [confirm , setConfirm] = useState(false)
  return (
    <div className="App">
      <ConfirmDialog 
      onConfirm={() => setCount((count) => count + 1)} 
      onCanel={()=>setConfirm(false)} 
      open={confirm}/>
      <div className="card">
        <button onClick={()=>setConfirm(true)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
