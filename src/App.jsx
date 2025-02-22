import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Home from './Home'
import Create from './Create'
import Update from './Update'
import { BrowserRouter, Routes , Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return ( 
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/create' element={<Create />}></Route>
      <Route path='/edit/:id' element={<Update />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
