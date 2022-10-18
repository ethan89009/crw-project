import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/Home'
import { Navbar } from './routes/navigation/Navbar'
import { Authentication } from './routes/authentication/Authentication'
import Shop from './components/shop/Shop'
export const App = () => {
  return (
    <Routes>
      <Route path='/'  element={<Navbar/>}>
      <Route  index element={<Home/>}/>
      <Route path='shop' element={<Shop/>}/>
      <Route path='auth' element={<Authentication/>}/>
      </Route>
    </Routes>
  )
}

export default App;