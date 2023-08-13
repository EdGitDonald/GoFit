import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Homepage from './Pages/Homepage/Homepage'


function App() {
 

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/'   element={<Homepage/>}/>
   
    </Routes>
  
    
  </BrowserRouter>
  )
}

export default App
