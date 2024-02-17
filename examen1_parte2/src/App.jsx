import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Home} from './components/Home'
import {Tienda} from './components/Tienda'
import {Navbar} from './components/Navbar'
import './styles.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom' 

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/Tienda' element={<Tienda></Tienda>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
