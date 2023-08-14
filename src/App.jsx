import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Product from './pages/Product';
import MyProducts from './pages/MyProducts';

function App() {

  const [add, setAdd] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage add={add} setAdd={setAdd}/>}/>
        <Route path='/signup' element={<SignUp setAdd={setAdd}/>}/>
        <Route path='/signin' element={<SignIn setAdd={setAdd}/>}/>
        <Route path='/product/:id' element={<Product setAdd={setAdd}/>}/>
        <Route path='/products/me' element={<MyProducts add={add} setAdd={setAdd}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App