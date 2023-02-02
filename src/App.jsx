import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import SignIn from './components/SignIn';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='login' element={<SignIn />} />
      <Route path='/*' element={<SignIn />} />
    </Routes>
  )
}

export default App
