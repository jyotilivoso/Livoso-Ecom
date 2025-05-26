import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom';





function App() {
 

  return (
    <>
    <Header></Header>
         
          <main className='min-h-[calc(100vh-80px)] pt-16'>
            <Outlet />
          </main>
          <Footer></Footer>
    </>
  )
}

export default App
