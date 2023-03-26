import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Pages/Auth/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Singup from './Pages/Auth/Singup'
import Header from './Components/Header/Header'
import Categories from './Pages/Others/Categories'
import Products from './Pages/Others/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Header/> */}
      <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Singup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/categories' element={<Categories/>} />
        <Route path='/products' element={<Products/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
