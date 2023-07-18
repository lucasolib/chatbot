import { useState } from 'react'
import BotInfo from './botInfo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BotInfo />
      <h1>"CHAT"</h1>
    </>
  )
}

export default App
