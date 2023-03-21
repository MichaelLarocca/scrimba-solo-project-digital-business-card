import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Photo from './components/Photo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="ctn">
      <Photo />
    </div>
  )
}

export default App
