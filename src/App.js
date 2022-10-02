import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/Home'
import { Navbar } from './routes/navigation/Navbar'
import { Authentication } from './routes/authentication/Authentication'
export const App = () => {
  return (
    <Routes>
      <Route path='/'  element={<Navbar/>}>
      <Route  index element={<Home/>}/>
      <Route path='shop' element="Hi i am shop"/>
      <Route path='auth' element={<Authentication/>}/>
      </Route>
    </Routes>
  )
}

export default App;