import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Product from './pages/Product';
import User from './pages/User';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/signup' element={<SignUp />}/>
        <Route path='/signin' element={<SignIn />}/>
        <Route path='/product/:id' element={<Product />}/>
        <Route path='/user' element={<User />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App