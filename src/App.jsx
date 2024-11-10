import { useState } from 'react'
import './App.css'
import Contador from './Components/Contador'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Contador/>
    </>
  )
}

export default App
