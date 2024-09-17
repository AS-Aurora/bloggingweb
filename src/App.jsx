import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import SlidingBanner from './components/SlidingBanner'
import Header from './components/header/Header'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Outlet />
      <Header />
      <SlidingBanner />

    </>
  )
}

export default App
