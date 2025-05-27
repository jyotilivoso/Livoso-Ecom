import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header1 from './components/Header1'
import Header from './components/Header'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom';
function App() {

  
 
  return (
    <>
          <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000
      }}>
        <Header />
      </div>

      {/* Scrollable Header1, add margin-top to offset fixed header height */}
      <div style={{ marginTop: '60px' /* adjust to Header height */ }}>
        <Header1/>
      </div>
         
          <main className='min-h-[calc(100vh-80px)] '>
            
            <Outlet />
          </main>
          <Footer></Footer>
    </>
  )
}

export default App
