import { useState } from 'react'
import './App.css'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widgets from './Widgets'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
        <Sidebar />
        <Feed />
        <Widgets />
    </div>
  )
}

export default App
